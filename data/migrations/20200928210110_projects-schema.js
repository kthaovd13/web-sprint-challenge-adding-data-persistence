
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 128)
          .notNullable();
      tbl.text('description', 128);
      tbl.boolean('completed', false)
          .notNullable();
    })
    .createTable('resource', tbl => {
        tbl.increments('id');
        tbl.string('name', 128)
          .notNullable();
        tbl.text('description', 128);
    })
    .createTable('task', tbl => {
        tbl.increments('id');
        tbl.text('description', 128)
          .notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed', false)
          .notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resource')
      .dropTableIfExists('task');
  };
