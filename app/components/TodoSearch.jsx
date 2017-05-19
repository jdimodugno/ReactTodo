var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type='text' ref='searchText' placeholder='Search todos' onChange={this.handleSearch}/>
        </div>
        <div>
          <input type='checkbox' className='checkbox' ref='showCompleted' onChange={this.handleSearch}/>
          <span>Show completed?</span>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
