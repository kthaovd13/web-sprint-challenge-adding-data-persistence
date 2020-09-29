const express = require('express');

//const projectRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
//server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "server up and running" })
})

module.exports = server;