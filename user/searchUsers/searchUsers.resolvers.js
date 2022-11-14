import client from "../../client.js";
const searchUsersResolvers = {
  Query: {
    searchUsers: (_, { keyword }) => {
      return client.user.findMany({
        where: {
          username: {
            startsWith: keyword,
          },
        },
      });
    },
  },
};

export default searchUsersResolvers;
