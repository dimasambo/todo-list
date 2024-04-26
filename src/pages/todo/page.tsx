import './page.css';
import {NewTodoForm} from "./form.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {State} from "../../redux/redux-store.ts";
import TodoList from "./todo-list.tsx";

export const TodoPage = () => {
  const activeTodos = useSelector((state: State) => state.todo.todoList);
  const deletedTodos = useSelector((state: State) => state.todo.deletedTodoList);
  const [todos, setTodos] = useState<TodoItem[]>(activeTodos);
  const [todosType, setTodosType] = useState<TodosType>('active');

  useEffect(() => {
    todosType === 'active'
      ? setTodos(activeTodos)
      : setTodos(deletedTodos);
  }, [todosType, activeTodos, deletedTodos]);

  return (
    <div>
      <nav className={'tabsNav'}>
        <div
          className={'tabItem'}
          onClick={() => setTodosType('active')}
          data-active={todosType === 'active' ? '' : undefined}
        >
          Active
        </div>
        <div
          className={'tabItem'}
          onClick={() => setTodosType('deleted')}
          data-active={todosType === 'deleted' ? '' : undefined}
        >
          Deleted
        </div>
      </nav>
      {todosType === 'active' ? <NewTodoForm/> : null}
      <TodoList todos={todos} todosType={todosType}/>
    </div>
  );
};