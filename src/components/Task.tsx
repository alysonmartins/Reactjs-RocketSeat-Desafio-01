import { CheckCircle, Circle, Trash } from "@phosphor-icons/react"
import styles from "./Task.module.css"

export interface Ttask {
  id: string
  isCompleted: boolean
  taskContent: string
}

export interface TaskProps {
  task: Ttask
  onCompletedTask: (id: string) => void
  onDeletedTask: (id: string) => void
}

export function Task({ task, onCompletedTask, onDeletedTask }: TaskProps) {
  return (

    <div key={task.id} className={`${styles.taskitem} ${task.isCompleted ? styles.taskItemChecked : ""}`}>

      <button className={task.isCompleted ? styles.checkboxChecked : styles.checkbox}>
        {task.isCompleted ? (
          <CheckCircle size={24} weight="fill" onClick={() => onCompletedTask(task.id)} />
        ) : (
          <Circle size={24} onClick={() => onCompletedTask(task.id)} />
        )}</button>

      <div className={styles.content}>{task.taskContent}</div>
      <button className={styles.trashIcon} onClick={() => onDeletedTask(task.id)}><Trash size={24} /></button>
    </div>


  )
}