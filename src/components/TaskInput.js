// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';

const TaskInput = ({ toggleTaskInput }) => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (text.trim() && deadline) {
      dispatch(addTask({ text, deadline }));
      setText('');
      setDeadline('');
      toggleTaskInput();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter task..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <input 
        type="datetime-local" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
      />
      <button onClick={handleSave}>Save Task</button>
    </div>
  );
};

export default TaskInput;
