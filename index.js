
/*!
 *
 * world
 *
 */

var inherit = require('inherit');
var emit = require('tree-emit');
var Loop = require('loop');

/**
 * Expose `World`.
 */
module.exports = World;

/**
 * World.
 */

function World() {
  Loop.call(this);
  emit.wrap(this);
}

/**
 * Inherit from `Loop`.
 */

inherit(World, Loop);
