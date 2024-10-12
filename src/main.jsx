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
    <TaskList></TaskList>
    } href="completed" linkText="Completed Tasks" header="To-Do"/>,
  },
  {
    path: "completed",
    element: <App component={
      <TaskList></TaskList>
    } href="/" linkText="Task List" header="Completed"/>,
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
