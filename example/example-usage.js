'use strict'

const theDb = require('the-db')
const { SomeResource } = require('the-demo-resource')

async function tryExample () {
  let db = theDb({
    dialect: 'memory',
    resources: {
      Example: class ExampleResource extends SomeResource {
        static get nameString () {
          return 'Example'
        }
      }
    }
  })
}

tryExample().catch((err) => console.error(err))
