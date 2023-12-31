interface IToDo {
  id: string;
  toDo: string;
  isDone: boolean;
}

interface IGetToDos {
  toDos: IToDo[] | undefined;
  isToDosLoading: boolean;
  isToDosError: boolean;
}

interface IUpdateIsDoneProps {
  toDo: IToDo;
  updatedIsDone: boolean;
}
