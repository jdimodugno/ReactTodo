var React = require('react');
var Search = require('Search');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function (text) {
    alert(text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h3> Main </h3>
        <Search/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = Main;
