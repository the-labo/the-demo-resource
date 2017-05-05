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

  static entityClass (ResourceEntity) {
    /** @class */
    class SomeResourceEntity extends ResourceEntity {
    }
    return SomeResourceEntity
  }
}

module.exports = SomeResource
