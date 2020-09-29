
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'nail something', notes: 'what is going on?', completed: false},
        {description: 'tape that over there', notes: 'move faster!', completed: false},
        {description: 'go nap', notes: 'well done', completed: false}
      ]);
    });
};
