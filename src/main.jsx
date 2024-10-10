import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Completed from './components/TaskList/Completed.jsx';
import TaskList from './components/TaskList/TaskList';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App component={ 
    <div> 
      <h1>To-Do App</h1> 
      <TaskList></TaskList>
    </div> 
    } href="completed" linkText="Completed Task"/>,
  },
  {
    path: "completed",
    element: <App component={
      <div>
        <h1>Completed Tasks</h1>
        <Completed></Completed>
      </div>
    } href="/" linkText="Task List"/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
