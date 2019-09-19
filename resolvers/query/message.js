const Message = require('../../models/message');

module.exports = {
  getLast100Messages: async (obj, args, context, info) => {
    return Message
      .query()
      .orderBy('created_at')
      .eager('user')
      .limit(100);
  },
};