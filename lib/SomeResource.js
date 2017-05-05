/**
 * Demo of the-db-resources
 * @augments Resource
 * @class SomeResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')

/** @lends SomeResource */
class SomeResource extends Resource {
  static get policy () {
    return {}
  }
}

module.exports = SomeResource
