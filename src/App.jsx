import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from 'react-bootstrap/Button';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <>
      <h1>To-Do App</h1>
      <TaskList></TaskList>
    </>
  )
}

export default App
