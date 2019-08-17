import Koa from "koa";
import jwt from "koa-jwt";
import mount from "koa-mount";
import graphqlHTTP from "koa-graphql";
import cors from "@koa/cors";

import * as env from "dotenv";
env.config();

import auth from "./auth";
import database from "./database";
import GraphQLSchema from "./graphql/schema";

const app = new Koa();

(async () => {
  app.context.db = await database.start(
    __dirname + "/database/mongo",
    process.env.DATABASE_URI
  );

  app.use(cors());

  //  retrieve and decode jwt if present
  //  passthrough enabled to pass login/signup request to the /graphql endpoint
  //  cookie allowing graphiql requests to be authenticated
  app.use(jwt({ secret: process.env.JWT_SECRET, passthrough: true }));

  app.use(auth.validate);

  app.use(
    mount(
      "/graphql",
      graphqlHTTP({
        schema: GraphQLSchema,
        graphiql: true
      })
    )
  );

  app.listen(4000);

  app.on("error", err => console.error(err));
})();
