
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./TaskAddArea.module.css";

interface TaskAddArea {
  onAddClick: (text: string) => void;
}

export function TaskAddArea({ onAddClick }: TaskAddArea) {

  const [inputText, setInputText] = useState("");

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function handleOnAddclick() {
    if (inputText.length > 0) {
      onAddClick(inputText);
      setInputText("");
    }
  }

  return (
    <div className={styles.addArea}>
      <input
        placeholder='Adicione uma nova tarefa'
        onChange={handleOnChangeInput}
        value={inputText}
      ></input>
      <button onClick={handleOnAddclick}>Criar <PlusCircle size={16} weight="bold" /></button>
    </div>
  )
}