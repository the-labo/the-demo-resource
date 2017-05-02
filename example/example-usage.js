'use strict'

const theDb = require('the-db')
const { TheDemoResource } = require('the-demo-resource')

async function tryExample () {
  let db = theDb({
    dialect: 'memory',
    resources: {
      Example: class ExampleResource extends TheDemoResource {
        static get nameString () {
          return 'Example'
        }
      }
    }
  })
}

tryExample().catch((err) => console.error(err))
