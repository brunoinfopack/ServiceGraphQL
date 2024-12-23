import { ApolloServer } from "apollo-server";
import typeDefs from "./src/schemas.js";
import Query from "./src/resolvers/querys.js";
import Mutation from "./src/resolvers/mutation.js";
import { cities, points } from "./src/banco.js";

const resolvers = { Query, Mutation };
const context = { cities, points };

const server = new ApolloServer({ typeDefs, resolvers, context });

server
    .listen()
    .then((serverInfo) => {
        console.log(`Serviço em execução: ${serverInfo.url}`);
    });