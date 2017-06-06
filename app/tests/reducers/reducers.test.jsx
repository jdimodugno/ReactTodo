var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'run'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);

    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Test todo'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        test: 'Lalala',
        completed: false,
        completedAt: undefined,
        createdAt: 123
      }];

      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };


      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todos[0]);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 3
      };

      var todos = [{
        id: 3,
        text: 'Testing toggle',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
