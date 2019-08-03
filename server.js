const Koa = require("koa");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
require("dotenv").config();

require("./database/database")();
const schema = require("./graphql/schema");

const app = new Koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);

app.listen(3000);

app.on("error", err => log.error("server error", err));
