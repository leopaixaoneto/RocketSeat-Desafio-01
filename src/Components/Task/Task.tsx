import { CheckCircle, Circle, Trash } from "phosphor-react"
import { useState } from "react"
import style from "./Task.module.css"

interface TaskProps {
  taskText: string;
  selfIndex: number;
  bIsChecked: boolean;
  onDeleteTask: (index: number) => void
  onChangeTaskStatus: (index: number) => void
}

export function Task({ taskText, selfIndex, bIsChecked, onChangeTaskStatus, onDeleteTask }: TaskProps) {

  function handleOnClick() {
    onChangeTaskStatus(selfIndex);
  }

  function handleDeleteTask() {
    onDeleteTask(selfIndex);
  }

  const classes = `${style.taskBox} ${bIsChecked ? style.checked : style.unchecked}`

  return (
    <div className={classes} >
      <button className={style.checkButton} onClick={handleOnClick}>
        {bIsChecked ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} weight="regular" />}
      </button>
      <span>{taskText}</span>
      <button className={style.trashButton} onClick={handleDeleteTask}>
        <Trash size={16} weight="regular" />
      </button>
    </div >
  )

}