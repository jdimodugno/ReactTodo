var React = require('react');
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
var uuid = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');

var Main = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className='page-title'> Todo App</h1>
        <div className='row'>
          <div className='columns small-centered small-12 medium-6 large-5'>
            <div className='container'>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;
