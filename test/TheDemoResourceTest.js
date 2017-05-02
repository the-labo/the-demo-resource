/**
 * Test for TheDemoResource.
 * Runs with mocha.
 */
'use strict'

const {TheDb} = require('the-db')
const TheDemoResource = require('../lib/TheDemoResource')
const { ok, equal } = require('assert')

describe('the-demo-resource', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    ok(TheDemoResource)

    let db = new TheDb({
      dialect: 'memory',
      resources: {
        TheDemoResource: TheDemoResource
      }
    })

    let resource = db.resource('TheDemoResource')
    let entity01 = await resource.create({
      name: 'foo'
    })
    ok(entity01)
    equal(entity01.name, 'foo')
  })
})

/* global describe, before, after, it */
