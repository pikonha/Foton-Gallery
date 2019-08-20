const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require("graphql");

const UserType = require("./User");
const CommentType = require("./Comment");

module.exports = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    owner: {
      type: new GraphQLNonNull(UserType),
      resolve: (parent, _, ctx) => {
        return ctx.db.User.findById(parent.owner);
      }
    },
    body: { type: GraphQLString },
    likes: { type: GraphQLInt },
    created: { type: GraphQLString },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: async (parent, _, ctx) => {
        const post = await ctx.db.Post.findById(parent.id);
        return post.comments;
      }
    }
  })
});
