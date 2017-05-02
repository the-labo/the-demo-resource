/**
 * @class TheDemoResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING } = DataTypes

/** @lends TheDemoResource */
class TheDemoResource extends Resource {
  static get policy () {
    return {
      name: { type: STRING }
    }
  }

  static get nameString () {
    return 'TheDemoResource'
  }
}

module.exports = TheDemoResource
