import express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const app = express();

const DEV_PORT = 3008;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || DEV_PORT }, () => {
    console.log("");
    console.log("\x1b[36m%s\x1b[0m", `Server has been start on http://localhost:${ process.env.PORT || DEV_PORT }/graphql`);
});