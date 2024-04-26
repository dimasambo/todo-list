import './todo-list.css';
import TodoItem from "./todo-item.tsx";
import {FC} from "react";

interface TodoListProps {
  todos: TodoItem[];
  todosType: TodosType;
}

export const TodoList: FC<TodoListProps> = ({todos, todosType}) => {
  return (
    <div className={'todoList'}>
      {todos.length ? todos.map((todo) => (
        <TodoItem
          todosType={todosType}
          key={todo.id}
          {...todo}
        />
      )) : <div>No todos in the current list</div>}
    </div>
  );
};

export default TodoList;