import client from "../../client.js";
const seeProfileResolvers = {
  Query: {
    // 유저 프로필 조회
    seeProfile: (_, { username }) =>
      client.user.findFirst({ where: { username } }),
  },
};

export default seeProfileResolvers;
