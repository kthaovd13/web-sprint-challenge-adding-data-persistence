const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask
}

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

function addProject(project) {
    return db('projects')
        .insert(project, 'id');
}

function addResource(resource) {
    return db('resource')
        .insert(resource, 'id');
}

function addTask(task) {
    return db('task')
        .insert(task)
        .join('projects as p', 'p.name', 'p.description');
}

