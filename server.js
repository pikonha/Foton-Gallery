const Koa = require("koa");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");

require("dotenv").config();

const database = require("./database");
const GraphQLSchema = require("./graphql/schema");

const app = new Koa();

(async () => {
  app.context.db = await database.start(
    __dirname + "/database/mongo",
    process.env.DATABASE_URI
  );

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
