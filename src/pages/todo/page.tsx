import './page.css';
import {NewTodoForm} from "./form.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Dispatch, State} from "../../redux/redux-store.ts";
import TodoList from "./todo-list.tsx";
import {changeTodosType} from "../../redux/todo/todo-slice.ts";

export const TodoPage = () => {
  const activeTodos = useSelector((state: State) => state.todo.todoList);
  const deletedTodos = useSelector((state: State) => state.todo.deletedTodoList);
  const todosType = useSelector((state: State) => state.todo.todosType);
  const [todos, setTodos] = useState<TodoItem[]>(activeTodos);
  const dispatch: Dispatch = useDispatch();

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
          onClick={() => dispatch(changeTodosType('active'))}
          data-active={todosType === 'active' ? '' : undefined}
        >
          Active
        </div>
        <div
          className={'tabItem'}
          onClick={() => dispatch(changeTodosType('deleted'))}
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