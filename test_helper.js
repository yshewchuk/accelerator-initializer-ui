require.extensions['.png'] = function(){ return null; }
require.extensions['.css'] = function(){ return null; }
require.extensions['.jpg'] = function(){ return null; }
require.extensions['.svg'] = function(){ return null; }

require('babel-register')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;

global.Blob = function Blob(params) {return params}
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// modified from https://medium.com/@george.norberg/how-to-use-jsdom-for-react-unit-testing-in-node-using-enzyme-mocha-localstorage-and-5918adf4f3be