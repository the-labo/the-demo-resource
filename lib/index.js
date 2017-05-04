/**
 * Demo of the-db-resources
 * @module the-demo-resource
 */
'use strict'

const SomeResource = require('./SomeResource')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  SomeResource,
  create
})

module.exports = lib
