// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);

  const toggleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  return (
    <div>
      <Header toggleTaskInput={toggleTaskInput} />
      {showTaskInput && <TaskInput toggleTaskInput={toggleTaskInput} />}
      <TaskList />
    </div>
  );
};

export default App;
