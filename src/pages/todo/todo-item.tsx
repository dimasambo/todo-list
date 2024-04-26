import './todo-item.css';
import {useDispatch} from 'react-redux';
import {FC} from "react";
import {Dispatch} from "../../redux/redux-store.ts";
import {removeTodo, restoreTodo, toggleComplete} from "../../redux/todo/todo-slice.ts";
import TrashIcon from '../../assets/trash.svg'
import RestoreIcon from '../../assets/restore.svg'

interface TodoItemProps extends TodoItem {
  todosType: TodosType;
}

const TodoItem: FC<TodoItemProps> = ({id, title, completed, todosType}) => {
  const dispatch: Dispatch = useDispatch();

  const handleTodoAction = () => {
    dispatch(todosType === 'active'
      ? removeTodo({id})
      : restoreTodo({id}));
  }

  const handleCompleteTodo = () => {
    dispatch(toggleComplete({id}))
  }

  return (
    <div className={'todoItem'}>
      <div className={'fieldBox'}>
        <input
          type='checkbox'
          checked={completed}
          disabled={todosType === 'deleted'}
          onChange={handleCompleteTodo}
        />
        <span className={'todoContent'} data-completed={completed ? '' : undefined}>{title}</span>
      </div>
      <img onClick={handleTodoAction} className={'todoAction'}
           src={todosType === 'active' ? TrashIcon : RestoreIcon}
           alt={'Todo-action'}/>
    </div>
  );
};

export default TodoItem;