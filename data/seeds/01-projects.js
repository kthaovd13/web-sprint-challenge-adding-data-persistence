
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Roof', description: 'replace roof', completed: false},
        {name: 'Driveway', description: 'seal driveway', completed: false},
        {name: 'Bathroom', description: 'revovate bathroom', completed: false}
      ]);
    });
};