/**
 * @fileoverview Closure compiler externs for the Polymer library.
 *
 * @externs
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt. The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
 */

/**
 * @param {PolymerElement} prototype The prototype of the element.
 */
var Polymer = function(prototype) {};


/** @constructor @extends {HTMLElement} */
var PolymerElement = function() {
  /** @type {Object<string,!HTMLElement>} */
  this.$;
};

/** @type {string} The Custom element tag name. */
PolymerElement.prototype.is;

/** @type {string} The native element this element extends. */
PolymerElement.prototype.extends;

/** On create callback. */
PolymerElement.prototype.created = function() {};
/** On ready callback. */
PolymerElement.prototype.ready = function() {};
/** On attached to the DOM callback. */
PolymerElement.prototype.attached = function() {};
/** On detached from the DOM callback. */
PolymerElement.prototype.detached = function() {};

/**
 * Callback fired when an attribute on the element has been changed.
 *
 * @param {string} name The name of the attribute that changed.
 */
PolymerElement.prototype.attributeChanged = function(name) {};

/** @typedef {Object<string,*>} */
PolymerElement.PropertyConfig;

/** @typedef {Object<string,(Function|PolymerElement.PropertyConfig)} */
PolymerElement.Properties;

/** @type {PolymerElement.Properties} */
PolymerElement.prototype.properties;

/** @type {Object<string,*>} */
PolymerElement.prototype.hostAttributes;

/**
 * An array of objects whose properties get mixed in to this element.
 * @type {Array<Object>}
 */
PolymerElement.prototype.mixin;

/**
 * An object that maps events to event handler function names.
 * @type {Object<string,string>}
 */
PolymerElement.prototype.listeners;

/**
 * Notifies the event binding system of a change to a property.
 * @param  {string} path  The path to set.
 * @param  {*}      value The value to send in the update notification.
 */
PolymerElement.prototype.notifyPath = function(path, value);


/**
 * Shorthand for setting a property, then calling notifyPath.
 * @param  {string} path  The path to set.
 * @param  {*}      value The new value.
 */
PolymerElement.prototype.setPathValue = function(path, value);

/**
 * Fire an event.
 *
 * @param {string} type An event name.
 * @param {*=} detail
 * @param {Node=} onNode Target node.
 * @param {boolean=} bubbles Set false to prevent bubbling, defaults to true.
 * @param {boolean=} cancelable Set false to prevent cancellation, defaults to
 *     true.
 * @return {Object} event
 */
PolymerElement.prototype.fire =
    function(type, detail, onNode, bubbles, cancelable) {};
