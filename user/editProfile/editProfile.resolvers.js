const editProfileResolvers = {
  Mutation: {
    editProfile: (
      _,
      { firstName, lastName, username, email, password, bio, avatar }
    ) => {},
  },
};

export default editProfileResolvers;
