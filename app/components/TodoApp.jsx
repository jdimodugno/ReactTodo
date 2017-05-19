var React = require('react');
var Search = require('Search');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h3> Main </h3>
        <Search/>
        <TodoList/>
        <TodoAdd/>
      </div>
    )
  }
});

module.exports = Main;
