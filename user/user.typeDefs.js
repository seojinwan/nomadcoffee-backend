const userTypeDefs = `#graphql
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        password: String!
        bio: String
        avatar: String
        createdAt: String!
        updatedAt: String!
    }
`;

export default userTypeDefs;
