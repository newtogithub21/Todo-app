// src/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Sample Task 1', deadline: '2024-06-20T10:00', completed: false },
    { id: 2, text: 'Sample Task 2', deadline: '2024-06-21T12:00', completed: false },
    { id: 3, text: 'Sample Task 3', deadline: '2024-06-22T14:00', completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), ...action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
