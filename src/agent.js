const
    agent    = exports,
    _package = require('../package.json');

agent.name    = _package.name;
agent.version = _package.version;

// TODO

Object.freeze(agent);
module.exports = agent;
