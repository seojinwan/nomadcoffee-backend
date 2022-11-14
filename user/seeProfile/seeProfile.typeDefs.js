const seeProfileTypeDefs = `#graphql
    type Query {
        seeProfile(username: String): User
    }
`;

export default seeProfileTypeDefs;
