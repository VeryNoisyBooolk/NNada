const { Model } = require("objection");
const db = require('../db');

Model.knex(db);

// Person model.
class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
