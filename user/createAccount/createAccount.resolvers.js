import client from "../../client.js";
import bcrypt from "bcrypt";
const createAccountResolvers = {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password, bio, avatar }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) throw new Error("this username or email is already");

        const hashedPw = await bcrypt.hash(password, 10);

        const newUser = await client.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password: hashedPw,
            ...(bio && { bio }),
            ...(avatar && { avatar }),
          },
        });

        console.log(newUser);

        return newUser;
      } catch (err) {
        return {
          ok: false,
          error: err.message,
        };
      }
    },
  },
};

export default createAccountResolvers;
