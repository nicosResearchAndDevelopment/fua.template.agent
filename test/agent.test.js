const
  expect = require('expect'),
  { describe, test } = require('mocha'),
  agent = require('../src/agent.js'),
  { name: identifier } = require('../package.json');

describe('agent.TEMPLATE', function () {

  test('basics', function () {
    expect(agent).toBeTruthy();
    expect(typeof agent).toBe('object');
    expect(Object.isFrozen(agent)).toBeTruthy();
    expect(global[identifier]).toBe(agent);
  });

  test('develop', async function () {
    console.log(agent);
  });

});
