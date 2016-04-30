var React = require('react');
var ReactDom = require('react-dom');
var AddressBook = require('./AddressBook.jsx');

ReactDom.render(<AddressBook name="hey" />, document.getElementById('app'));