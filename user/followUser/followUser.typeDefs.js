const followUserTypeDefs = `#graphql
    type FollowResult { 
        ok: Boolean!,
        error: String,
    }
    type Mutation {
        follow(username: String): FollowResult
    }
`;
export default followUserTypeDefs;
