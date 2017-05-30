var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleClick: function (id) {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={this.handleClick}>
        <input type='checkbox' checked={completed}></input>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
