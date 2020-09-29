
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'tools', description: 'drill'},
        {name: 'material', description: 'drywall'},
        {name: 'other', description: 'tape'}
      ]);
    });
};
