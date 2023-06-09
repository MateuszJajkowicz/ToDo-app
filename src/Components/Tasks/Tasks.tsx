import { TaskProps } from '../../models/taskModel';
import Task from '../Task/Task';
import styles from './Tasks.module.scss';

const Tasks = ({
  tasks,
  onComplete,
  onDelete,
}: {
  tasks: TaskProps[];
  onComplete: any;
  onDelete: any;
}) => {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>
            {completedTasks} of {taskQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
