import styles from "./Header.module.css"
import rocketIcon from '../../assets/rocket.svg';

export function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img src={rocketIcon} alt="Logotipo ToDo" />
        <span className={styles.firstHalfName}>to</span>
        <span className={styles.secondHalfName}>do</span>
      </div>
    </div>
  )
}