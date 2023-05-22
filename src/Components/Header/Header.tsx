import styles from './Header.module.scss';
import todoLogo from '../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ onAddTask }: { onAddTask: any }) => {
  const [title, setTitle] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: any) {
    setTitle(event.currentTarget.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder='Add a new task'
          type='text'
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
