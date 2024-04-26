import './form.css'
import {FC, useRef} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Dispatch} from "../../redux/redux-store.ts";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/todo/todo-slice.ts";

interface FormInputs {
  content: string;
}

export const NewTodoForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset
  } = useForm<FormInputs>();
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch: Dispatch = useDispatch();

  const submit: SubmitHandler<FormInputs> = (data) => {
    if (data.content.trim().length) {
      dispatch(addTodo({content: data.content}));
      reset();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(submit)}
    >
      <input {...register('content', {required: true})} className={'formInput'}/>
      <button disabled={Boolean(formState.errors.content)} type={'submit'} className={'formButton'}>
        Add
      </button>
    </form>
  );
};