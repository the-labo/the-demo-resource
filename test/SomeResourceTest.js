/**
 * Test for SomeResource.
 * Runs with mocha.
 */
'use strict'

const { TheDb } = require('the-db')
const SomeResource = require('../lib/SomeResource')
const { ok, equal } = require('assert')

describe('the-demo-resource', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    ok(SomeResource)

    let db = new TheDb({
      dialect: 'memory'
    }).load([
      SomeResource
    ])

    let resource = db.resources[ SomeResource.nameString ]
    let entity01 = await resource.create({})
    ok(entity01)
  })
})

/* global describe, before, after, it */