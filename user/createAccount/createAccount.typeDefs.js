const createAccountTypedefs = `#graphql
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String!
            username: String!
            email: String!
            password: String!
            bio: String
            avatar: String
        ): User
    }
`;
export default createAccountTypedefs;
