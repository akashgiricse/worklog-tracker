import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });
app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate user table with dummy data
  db.user.bulkCreate(
    times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );

  // populate workstat table with dummy data
  db.workstat.bulkCreate(
    times(10, () => ({
      date: faker.date.recent(),
      duration: faker.random.float({ min: 0, max: 24, precision: 0.01 }),
      userId: random(1, 10)
    }))
  );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
