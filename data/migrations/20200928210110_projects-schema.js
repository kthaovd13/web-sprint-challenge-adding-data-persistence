
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 128)
          .notNullable();
      tbl.integer('task_id')
          .unsigned()
          .notNullable()
          .references('task.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      tbl.text('description', 128);
      tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
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
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resource.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('task')
      .dropTableIfExists('resource')
      .dropTableIfExists('projects');
  };
