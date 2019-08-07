const Koa = require("koa");
const jwt = require("koa-jwt");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");

require("dotenv").config();

const auth = require("./auth");
const database = require("./database");
const GraphQLSchema = require("./graphql/schema");

const app = new Koa();

(async () => {
  app.context.db = await database.start(
    __dirname + "/database/mongo",
    process.env.DATABASE_URI
  );

  //  retrieve jwt if present
  //  passthrough enabled to pass login/signup request to the /graphql endpoint
  //  cookie to allow graphiql requests to be authenticated
  app.use(
    jwt({ secret: process.env.JWT_SECRET, passthrough: true, cookie: "token" })
  );

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

  app.listen(3000);

  app.on("error", err => log.error("server error", err));
})();
