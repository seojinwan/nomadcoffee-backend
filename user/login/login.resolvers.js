import client from "../../client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginResolvers = {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const loginUser = await client.user.findUnique({ where: { username } });
        if (!loginUser) throw new Error("아이디 가입정보 없음");

        const result = await bcrypt.compare(password, loginUser.password);
        if (!result) throw new Error("비밀번호 오류!");

        return {
          ok: true,
          token: jwt.sign(
            {
              id: loginUser.id,
            },
            process.env.JWT_SECRET
          ),
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
export default loginResolvers;
