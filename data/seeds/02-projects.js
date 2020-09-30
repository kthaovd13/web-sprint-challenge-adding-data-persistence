
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {name: 'Roof', description: 'replace roof', completed: false},
        {name: 'Driveway', description: 'seal driveway', completed: false},
        {name: 'Bathroom', description: 'revovate bathroom', completed: false}
      ]);
};