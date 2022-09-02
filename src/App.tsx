import styles from './app.module.css'

import { Header } from "./Components/Header/Header"
import { TaskArea } from "./Components/TaskArea/TaskArea"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskArea />
      </div>
    </div>
  )
}

export default App
