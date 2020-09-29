const db = require('../data/db-config');

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({ id }).first();
}

function findResources() {
    return db('resource')
}

function findTasks() {
    return db('task')
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
        .insert(task, 'id')
        .join('projects as p', 'p.name', 'p.description');
}

module.exports = {
    find,
    findById,
    findResources,
    findTasks,
    add
}

