var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  PropTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>
      });
    };

    return (
      <div>
        <h3> TodoList </h3>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
