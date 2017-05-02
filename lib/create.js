/**
 * Create a TheDemoResource instance
 * @function create
 * @param {...*} args
 * @returns {TheDemoResource}
 */
'use strict'

const TheDemoResource = require('./TheDemoResource')

/** @lends create */
function create (...args) {
  return new TheDemoResource(...args)
}

module.exports = create
