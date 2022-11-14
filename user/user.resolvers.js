import client from "../client.js";

const userResolvers = {
  User: {
    totalFollowers: ({ id }) => {
      return client.user.count({
        where: {
          followings: {
            some: { id },
          },
        },
      });
    },
    totalFollowings: ({ id }) => {
      return client.user.count({
        where: {
          followers: {
            some: { id },
          },
        },
      });
    },
  },
};
export default userResolvers;
