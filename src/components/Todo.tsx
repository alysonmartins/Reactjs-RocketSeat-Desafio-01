import { ChangeEvent, InvalidEvent, useState } from "react";
import { Trash, Circle, CheckCircle, ClipboardText, PlusCircle } from "@phosphor-icons/react";
import styles from "./Todo.module.css";
import { Task } from "./Task";

export function Todo() {
  const taskDB = [
    {
      id: "769eb1fb-89c4-4b84-b16f-f1da3bbaf13c",
      isCompleted: true,
      taskContent:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
    },
    {
      id: "64095175-8295-4151-b1e5-06bf4dae408d",
      isCompleted: true,
      taskContent:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
    },
    {
      id: "e9e9eb01-e7ea-4bea-bb8d-307fbd005d8e",
      isCompleted: false,
      taskContent:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
    },
  ];



  const uuid = self.crypto.randomUUID();

  const [taskList, setTaskList] = useState({ taskDB });


  const [newTaskContent, setNewTaskContent] = useState("");


  const [completedQuantityTask, setCompletedQuantityTask] = useState(
    taskList.taskDB.filter((task) => task.isCompleted).length
  );

  // const [taskCompleted, setTaskCompleted] = useState(false);


  function handleCreateTask() {
    event?.preventDefault();

    const newTaskContentHolder = {
      id: uuid,
      isCompleted: false,
      taskContent: newTaskContent,
    };

    setTaskList({ taskDB: [...taskList.taskDB, newTaskContentHolder] });

    // Print Information Inserted in Object TasksList
    // console.log(taskDB);
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    // Check Value
    // console.log(newTaskContent);
    setNewTaskContent(event.target.value);
  }

  function handleNewTaskContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  }


  function handleDeleteTask(id: string) {
    const taskWithoutDeletedOne = taskList.taskDB.filter((task) => {
      return task.id !== id;
    });
    // console.log(taskWithoutDeletedOne);
    setTaskList({ taskDB: taskWithoutDeletedOne });
    setCompletedQuantityTask(taskWithoutDeletedOne.filter((task) => task.isCompleted).length);
  }

  function handleCompleteTask(id: string) {



    const taskCompletedOne = taskList.taskDB.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    });

    setTaskList({ taskDB: taskCompletedOne });

    // Agora, atualize o estado de completedQuantityTask depois de setar o TaskList
    setCompletedQuantityTask(taskCompletedOne.filter((task) => task.isCompleted).length);


  };




  return (
    <div>

      <div className={styles.tasks}>
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Digite nova Task"
            value={newTaskContent}
            onChange={handleNewTaskContentChange}
            onInvalid={handleNewTaskContentInvalid}
            required
          />
          <button type="submit">
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>
      <div className={styles.listtask}>


        <header>
          <div>
            <p>
              Tarefas criadas<span>{taskList.taskDB.length}</span>
            </p>
          </div>
          <div>
            <p>
              Concluidas{" "}
              <span>
                {completedQuantityTask} de {taskList.taskDB.length}
              </span>
            </p>
          </div>
        </header>


        <main>
          {
            taskList.taskDB.length > 0 ? (
              <div >
                {
                  taskList.taskDB.map((task) => {
                    return (
                      <Task
                        key={task.id}
                        onCompletedTask={handleCompleteTask}
                        onDeletedTask={handleDeleteTask}
                        task={task}
                      />
                    );
                  })
                }
              </div>
            ) : (
              <div>
                <ClipboardText size={56} color="#333333" />
                <div className={styles.messages}>
                  <strong> Você ainda não tem tarefas cadastradas </strong>
                  <p> Crie tarefas e organize seus itens a fazer </p>
                </div>
              </div>

            )
          }


        </main>



      </div>
    </div>
  );
}
