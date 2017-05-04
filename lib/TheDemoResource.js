/**
 * Demo of the-db-resources
 * @augments Resource
 * @class TheDemoResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')

/** @lends TheDemoResource */
class TheDemoResource extends Resource {
  static get policy () {
    return {}
  }

  static get nameString () {
    return 'TheDemoResource'
  }
}

module.exports = TheDemoResource
