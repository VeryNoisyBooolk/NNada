const { gql } = require('apollo-server-koa');
const userMutations = require('./resolvers/mutation/user');
const messageMutations = require('./resolvers/mutation/message');
const messageQueries = require('./resolvers/query/message');
const messageSubscriptions = require('./resolvers/subscription/message');

const typeDefs = gql`
  input UserInput {
    username: String!
  }
  input MessageInput {
    text: String!
    user_id: ID!
  }
  type User {
    id: ID
    username: String
  }
  type Message {
    id: ID
    text: String
    created_at: String
    user: User
  }
  type Query {
    getLast100Messages: [Message]
  }
  type Mutation {
    findOrCreateUser(user: UserInput!): User
    createMessage(message: MessageInput!): Message
  }
  type Subscription {
    messageCreated: Message
  }
`;

const resolvers = {
  Query: {
    ...messageQueries
  },
  Mutation: {
    ...userMutations,
    ...messageMutations
  },
  Subscription: {
    ...messageSubscriptions
  }
};

module.exports = {
  typeDefs,
  resolvers,
};