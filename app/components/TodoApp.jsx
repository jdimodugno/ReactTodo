var React = require('react');
var Search = require('Search');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var Main = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
        id: 1,
        text: 'Walk the dog'
      }, {
        id: 2,
        text: 'Feed the cat'
      }, {
        id: 3,
        text: 'Clean the yard'
      }, {
        id: 4,
        text: 'Take a shower'
      }]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h3> Main </h3>
        <Search/>
        <TodoList todos={todos}/>
        <TodoAdd/>
      </div>
    )
  }
});

module.exports = Main;
