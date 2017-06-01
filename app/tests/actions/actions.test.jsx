var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var searchTextAction = actions.setSearchText('run');

    expect(searchTextAction.type).toBe('SET_SEARCH_TEXT');
    expect(searchTextAction.searchText).toBe('run');
  });

  it('should generate add todo action', () => {
    var addTodoAction = actions.addTodo('run');

    expect(addTodoAction.type).toBe('ADD_TODO');
    expect(addTodoAction.text).toBe('run');
  });

  it('should generate toggle show completed action', () => {
    var toggleShowCompletedAction = actions.toggleShowCompleted();

    expect(toggleShowCompletedAction.type).toBe('TOGGLE_SHOW_COMPLETED');
  });

  it('should generate toggle todo action', () => {
    var toggleTodoAction = actions.toggleTodo(1);

    expect(toggleTodoAction.type).toBe('TOGGLE_TODO');
    expect(toggleTodoAction.id).toBe(1);
  });
})
