const
    agent              = exports,
    {name: identifier} = require('../package.json'),
    assert             = require('@nrd/fua.core.assert');

assert(!global[identifier], 'unable to load a second uncached version of the singleton ' + identifier);
Object.defineProperty(global, identifier, {value: agent, configurable: false, writable: false, enumerable: false});

// TODO implement agent functionality

Object.freeze(agent);
module.exports = agent;
