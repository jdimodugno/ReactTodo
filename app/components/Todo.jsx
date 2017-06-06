var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  handleClick: function () {
    var {id, dispatch} = this.props;
    console.log(id);
    dispatch(actions.toggleTodo(id));
  },
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('Do MMM YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={this.handleClick}>
        <div>
          <input type='checkbox' checked={completed}></input>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
