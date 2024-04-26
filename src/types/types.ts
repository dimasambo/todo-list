interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

type TodosType = 'active' | 'deleted'