
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {name: 'Roof', task_id: 1, description: 'replace roof', completed: false},
        {name: 'Driveway', task_id: 2, description: 'seal driveway', completed: false},
        {name: 'Bathroom', task_id: 3, description: 'revovate bathroom', completed: false}
      ]);
};