var React = require('react');

var Todo = React.createClass({
  handleClick: function (id) {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    var {id, text, completed} = this.props;
    return (
      <div onClick={this.handleClick}>
        <input type='checkbox' checked={completed}></input>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
