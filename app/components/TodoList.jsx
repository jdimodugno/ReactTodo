var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    return (
      <div>
        <h3> TodoList </h3>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    )
  }
});

module.exports = TodoList;
