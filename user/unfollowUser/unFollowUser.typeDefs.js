const unFollowUserTypeDefs = `#graphql
    type UnFollowResult { 
        ok: Boolean!,
        error: String,
    }
    type Mutation {
        unFollow(username: String): UnFollowResult
    }
`;

export default unFollowUserTypeDefs;
