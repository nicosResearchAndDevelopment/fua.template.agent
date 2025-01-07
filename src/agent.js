const
    Agent              = exports,
    {name: identifier} = require('../package.json'),
    assert             = require('@fua/core.assert');

assert(!global[identifier], 'unable to load a second uncached version of the singleton ' + identifier);
Object.defineProperty(global, identifier, {value: Agent, configurable: false, writable: false, enumerable: false});

const
    _Agent = Object.create(null),
    is     = require('@fua/core.is');

Agent.initialize = async function (options = {}) {
    assert.object(options);
    assert(!_Agent.initialized, 'already initialized');
    _Agent.initialized = true;

    // TODO implement initializer

    return Agent;
};

// TODO implement functionality

Object.freeze(Agent);
module.exports = Agent;
