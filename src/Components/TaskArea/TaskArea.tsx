import styles from './TaskArea.module.css'

import { useState } from 'react';
import { TaskListArea } from '../TaskListArea/TaskListArea';
import { TaskAddArea } from '../TaskAddArea/TaskAddArea';


export interface TaskElement {
  text: string,
  checked: boolean
}

export function TaskArea() {
  const [tasks, setTasks] = useState(
    [
      { text: 'Fazer as compras mensais', checked: true },
      { text: 'Pagar fatura do cartão', checked: false },
      { text: 'Fazer exercícios matinais', checked: false }
    ] as TaskElement[]
  );

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((e, i) => i == index ? false : true))
  }

  function handleChangeTaskStatus(index: number) {
    const mapResult = tasks.map(
      (e, i) => {
        if (i == index) {
          e.checked = !e.checked;
        }
        return e;
      }
    );
    setTasks(mapResult);
  }

  function handleAddTask(text: string) {
    setTasks([...tasks, { text, checked: false }]);
  }

  return (
    <div className={styles.taskArea}>

      <TaskAddArea onAddClick={handleAddTask} />
      <TaskListArea tasks={tasks} handleChangeTaskStatus={handleChangeTaskStatus} handleDeleteTask={handleDeleteTask} />
    </div >
  );
}