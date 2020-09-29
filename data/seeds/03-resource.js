
exports.seed = function(knex, Promise) {
      return knex('resource').insert([
        {name: 'tools', description: 'drill'},
        {name: 'material', description: 'drywall'},
        {name: 'other', description: 'tape'}
      ]);
};
