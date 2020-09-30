const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: `${err}Failed to create new project` });
  });
});

router.post('/resources', (req, res) => {
   const resourceData = req.body;
  
   Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

  router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
      })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router;