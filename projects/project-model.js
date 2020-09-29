const db = require('../data/db-config');

function find() {
    return db('projects');
}

function find() {
    return db('resource');
}

function find() {
    return db('task');
}

function add(project) {
    return db('projects')
        .insert(project, 'id');
}

function add(resource) {
    return db('resource')
        .insert(resource, 'id');
}

function add(task) {
    return db('task')
        .insert(task, 'id');
}

module.exports = {
    find,
    add,
}

