var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');

var Main = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [{
        id: uuid(),
        text: 'Walk the dog'
      }, {
        id: uuid(),
        text: 'Feed the cat'
      }, {
        id: uuid(),
        text: 'Clean the yard'
      }, {
        id: uuid(),
        text: 'Take a shower'
      }]
    };
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(), text: text }
      ]
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h3> Main </h3>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = Main;
