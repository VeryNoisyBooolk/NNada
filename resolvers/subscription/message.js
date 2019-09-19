const { pubsub, MESSAGE_CREATED } = require('../../utils');

module.exports = {
  messageCreated: {
    subscribe: () => pubsub.asyncIterator([ MESSAGE_CREATED ])
  }
};