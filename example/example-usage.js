'use strict'

const theDb = require('the-db')
const { SomeResource } = require('the-demo-resource')

async function tryExample () {

  let db = theDb({
    dialect: 'memory'
  })

  db.load(class extends SomeResource {

  }, 'SomeResource01')
  let { SomeResource01 } = db.resources

  let entity01 = await SomeResource01.create({ name: 'entity01' })
  /* ... */
}

tryExample().catch((err) => console.error(err))
