/**
 * Demo of the-db-resources
 * @module the-demo-resource
 */
'use strict'

const TheDemoResource = require('./TheDemoResource')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheDemoResource,
  create
})

module.exports = lib
