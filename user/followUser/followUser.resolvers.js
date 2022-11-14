import { protectResolver } from "../user.utils.js";
import client from "../../client.js";
const followUserResolvers = {
  Mutation: {
    follow: protectResolver(async (_, { username }, { loggedUser }) => {
      try {
        // 유저 이름 유효한지 검사
        const exists = await client.user.count({
          where: { username },
          select: { id: true },
        });
        if (!Boolean(exists)) throw new Error("팔로우할 유저 재확인 요망");

        await client.user.update({
          where: { username },
          data: {
            followers: {
              connect: { id: loggedUser.id },
            },
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
    }),
  },
};

export default followUserResolvers;
