'use strict'

const theDb = require('the-db')
const { SomeResource } = require('the-demo-resource')

async function tryExample () {

  let db = theDb({
    dialect: 'memory'
  }).load([
    class extends SomeResource {
      static get nameString () {
        return 'MyExample'
      }
    }
  ])
  let { MyExample } = db.resources

  let entity01 = await MyExample.create({ name: 'entity01' })
  /* ... */
}

tryExample().catch((err) => console.error(err))
