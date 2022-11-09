const editProfileResolvers = {
  Mutation: {
    editProfile: (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {},
  },
};

export default editProfileResolvers;
