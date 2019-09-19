const {PubSub} =require('apollo-server-koa');

const pubsub = new PubSub();

const MESSAGE_CREATED = 'MESSAGE_CREATED';

module.exports = {
  MESSAGE_CREATED,
  pubsub
};