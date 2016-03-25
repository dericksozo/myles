(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Calendar = {
    controller: function controller() {},
    view: function view(ctrl) {
        return {
            tag: "div",
            children: ["Hello World"]
        };
    }
};

exports.default = Calendar;


},{}],2:[function(require,module,exports){
"use strict";

var _Calendar = require("./Calendar");

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

m.render(document.querySelector("main"), m.component(_Calendar2.default, {}, []));


},{"./Calendar":1}]},{},[2]);
