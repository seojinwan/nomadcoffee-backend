import client from "../../client.js";
import bcrypt from "bcrypt";
const createAccountResolvers = {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) throw new Error("this username or email is already");

        const hashedPw = await bcrypt.hash(password, 10);

        await client.user.create({
          data: {
            username,
            email,
            name,
            password: hashedPw,
            ...(location && { location }),
            ...(avatarURL && { avatarURL }),
            ...(githubUsername && { githubUsername }),
          },
        });

        return {
          ok: true,
        };
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
