/**
 * Demo of the-db-resources
 * @augments Resource
 * @class TheDemoResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING, NUMBER, DATE, ENTITY } = DataTypes

/** @lends TheDemoResource */
class TheDemoResource extends Resource {
  static get policy () {
    return {}
  }

  static get nameString () {
    return 'TheDemoResource'
  }

  static entityClass (ResourceEntity) {
    class TheDemoResourceEntity extends ResourceEntity {

    }
    return TheDemoResourceEntity
  }
}

module.exports = TheDemoResource
