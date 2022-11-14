import client from "../../client.js";
const seeProfileResolvers = {
  Query: {
    // 유저 프로필 조회
    seeProfile: (_, { username }) =>
      client.user.findUnique({
        where: { username },
        include: {
          followers: {
            skip: 0,
            take: 5,
          },
          followings: {
            skip: 0,
            take: 5,
          },
        },
      }),
  },
};

export default seeProfileResolvers;
