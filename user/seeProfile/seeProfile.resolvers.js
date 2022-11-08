import client from "../../client.js";
const seeProfileResolvers = {
  Query: {
    seeProfile: (_, { id }) => client.user.findFirst({ where: { id } }),
  },
};

export default seeProfileResolvers;
