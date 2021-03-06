import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {

      listOfTodos: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }, {
        task: 'wash Cookies',
        id: 1528817084358,
        completed: false
      }

      ]

    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>
        <TodoList todoitems={this.state.listOfTodos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
