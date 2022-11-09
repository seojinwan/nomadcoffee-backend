const userTypeDefs = `#graphql
    type User {
        id: Int!
        username: String!
        email: String!
        name: String!
        location: String!
        password: String!
        avatarURL: String
        githubUsername: String
        createdAt: String!
        updatedAt: String!
    }
`;

export default userTypeDefs;
