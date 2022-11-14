import { protectResolver } from "../user.utils.js";
import client from "../../client.js";
const unFollowUserResolvers = {
  Mutation: {
    unFollow: protectResolver(async (_, { username }, { loggedUser }) => {
      try {
        const exists = await client.user.count({
          where: { username },
        });
        if (!Boolean(exists)) throw new Error("언팔로우 할 유저 재 확인 요망");
        await client.user.update({
          where: { username },
          data: {
            followers: {
              disconnect: {
                id: loggedUser.id,
              },
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

export default unFollowUserResolvers;
