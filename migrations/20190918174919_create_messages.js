exports.up = function (knex) {
  return knex.schema.createTable('messages', function (table) {
    table.increments();
    table.string('text');
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
