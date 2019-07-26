export default `

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        workstats: [WorkStat!]!
    }

    type WorkStat {
        id: ID!
        date: String!
        duration: Float!
        userId: ID!
        user: User!
    }

    type Query {
        workstats: [WorkStat!]!
        workstat(id: ID!): WorkStat
        user(id: ID!): User
        users: [User!]!
    }

    type Mutation {
        createWorkStat(date: String!, duration: Float!, userId: ID! ): WorkStat!
        updateWorkStat(id: ID!, date: String, duration: Float!): [Int!]!
        deleteWorkStat(id: ID!): Int!
    }
`;
