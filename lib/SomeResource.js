/**
 * Demo of the-db-resources
 * @augments Resource
 * @class SomeResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING } = DataTypes

/** @lends SomeResource */
class SomeResource extends Resource {
  static get policy () {
    return {
      name: {
        description: '',
        type: STRING
      }
    }
  }

  static entityClass (ResourceEntity) {
    /** @class */
    class SomeResourceEntity extends ResourceEntity {
    }
    return SomeResourceEntity
  }
}

module.exports = SomeResource
