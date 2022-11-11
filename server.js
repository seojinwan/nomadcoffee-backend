import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import { typeDefs, resolvers } from "./schema.js";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import { getUser } from "./user/user.utils.js";

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors(), morgan("tiny"), bodyParser.json());

app.use("/static", express.static("uploads"));

app.use(
  graphqlUploadExpress(),
  expressMiddleware(server, {
    context: async ({ req }) => ({
      loggedUser: await getUser(req.headers.authorization),
    }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
console.log(`🚀 Server ready at http://localhost:${PORT}/`);
