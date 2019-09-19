const Message = require('../../models/message');
const { pubsub, MESSAGE_CREATED } = require('../../utils');

module.exports = {
  createMessage: async (obj, { message }, context, info) => {
    const createdMessage = await Message
      .query()
      .insert(message);

    const resultMessage = await Message
      .query()
      .eager('user')
      .findById(createdMessage.id);
    pubsub.publish(MESSAGE_CREATED, { messageCreated: resultMessage });
    return resultMessage;
  },
};