import { TaskElement } from "../TaskArea/TaskArea"
import styles from "./TaskListArea.module.css"
import clipBoardIcon from '../../assets/Clipboard.svg';
import { Task } from "../Task/Task";
import { v4 as uuidv4 } from 'uuid';

interface TaskListAreaProps {
  tasks: TaskElement[];
  handleChangeTaskStatus: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}

export function TaskListArea({ tasks, handleChangeTaskStatus, handleDeleteTask }: TaskListAreaProps) {

  function generateFinalizedTasks(): string {
    const counter = tasks.reduce((prev, e) => { if (e.checked) prev += 1; return prev }, 0)

    return `${counter} de ${tasks.length}`
  }

  function generateTasksArea() {
    return (tasks.length) == 0 ?
      (
        <div className={styles.listAreaNoCotent}>
          <img src={clipBoardIcon} alt="Logotipo ToDo" />
          <span>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )
      :
      (
        <div className={styles.listAreaContent}>
          {
            tasks.map(
              (e, index) =>
                <Task
                  key={uuidv4()}
                  selfIndex={index}
                  bIsChecked={tasks[index].checked}
                  taskText={e.text}
                  onChangeTaskStatus={handleChangeTaskStatus}
                  onDeleteTask={handleDeleteTask}
                />
            )
          }
        </div>
      )

  }

  return (
    <div className={styles.listArea}>
      <div className={styles.listAreaHeader}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <span className={styles.counter}>{generateFinalizedTasks()}</span>
        </div>
      </div>
      {generateTasksArea()}
    </div>
  )
}