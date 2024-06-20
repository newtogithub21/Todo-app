// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../tasksSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div>
            <span>{task.text}</span>
            <span>{task.deadline}</span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
