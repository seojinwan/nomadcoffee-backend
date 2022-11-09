const createAccountTypedefs = `#graphql
    type CreateResult {
        ok: Boolean
        error: String
    }
    type Mutation {
        createAccount(
            username: String!
            email: String!
            name: String!
            password: String!
            location: String
            avatarURL: String
            githubUsername: String
        ): CreateResult
    }
`;
export default createAccountTypedefs;
