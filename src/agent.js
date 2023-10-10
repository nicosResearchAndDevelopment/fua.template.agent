const
    agent              = exports,
    {name: identifier} = require('../package.json'),
    assert             = require('@nrd/fua.core.assert');

// TODO implement agent functionality

assert(!global[identifier], 'unable to load a second uncached version of the singleton ' + identifier);
Object.defineProperty(global, identifier, {value: agent, configurable: false, writable: false, enumerable: false});

Object.freeze(agent);
module.exports = agent;
