const { Model } = require("objection");
const db = require('../db');
const User = require('./user');

Model.knex(db);

class Message extends Model {
  static get tableName() {
    return 'messages';
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'messages.user_id',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Message;
