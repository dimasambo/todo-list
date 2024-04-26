import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  todoList: [] as TodoItem[],
  todosType: 'active' as TodosType,
  deletedTodoList: [] as TodoItem[],
}

export type InitialStateType = typeof initialState

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state: InitialStateType, action: PayloadAction<{ content: string }>) {
      state.todoList.unshift({
        id: new Date().toISOString(),
        title: action.payload.content,
        completed: false,
      });
    },
    toggleComplete(state: InitialStateType, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.todoList.find(todo => todo.id === action.payload.id);
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state: InitialStateType, action: PayloadAction<{ id: string }>) {
      const todoToDelete = state.todoList.find(todo => todo.id === action.payload.id);
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id);
      todoToDelete && state.deletedTodoList.push(todoToDelete);
    },
    restoreTodo(state: InitialStateType, action: PayloadAction<{ id: string }>) {
      const todoToRestore = state.deletedTodoList.find(todo => todo.id === action.payload.id);
      state.deletedTodoList = state.deletedTodoList.filter(todo => todo.id !== action.payload.id);
      todoToRestore && state.todoList.unshift(todoToRestore);
    },
    changeTodosType(state: InitialStateType, action: PayloadAction<TodosType>) {
      state.todosType = action.payload;
    }
  },
});

export const {
  addTodo,
  removeTodo,
  toggleComplete,
  restoreTodo,
  changeTodosType
} = todoSlice.actions

export default todoSlice.reducer;