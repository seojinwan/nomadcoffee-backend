const userTypeDefs = `#graphql
    type User {
        id: Int!
        username: String!
        email: String!
        name: String!
        password: String!

        location: String
        avatarURL: String
        githubUsername: String
        createdAt: String!
        updatedAt: String!
        followers: [User]
        followings: [User]
        totalFollowers: Int!
        totalFollowings: Int!
    }
`;

export default userTypeDefs;
