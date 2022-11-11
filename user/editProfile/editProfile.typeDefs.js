const editProfileTypeDefs = `#graphql
    scalar Upload
    type EditProfileResult {
        ok: String!,
        error: String,
    }
    type Mutation {
        editProfile(
            username: String
            email: String
            name: String
            location: String
            password: String
            avatarURL: Upload
            githubUsername: String
        ):EditProfileResult 
    }
`;

export default editProfileTypeDefs;
