const
    expect           = require('expect'),
    {describe, test} = require('mocha'),
    agent            = require('../src/agent.js');

describe('template.agent', function () {

    test('basics', function () {
        expect(agent).toBeTruthy();
        expect(typeof agent).toBe('object');
    });

    test('develop', async function () {
        console.log(agent);
    });

});
