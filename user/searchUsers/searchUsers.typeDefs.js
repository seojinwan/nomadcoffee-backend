const searchUsersTypeDefs = `#graphql
    type Query {
        searchUsers(keyword: String!): [User]
    }
`;
export default searchUsersTypeDefs;
