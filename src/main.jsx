import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import TaskList from './components/TaskList/TaskList';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path: "/to-do-app/",
    element: <App href="/to-do-app/completed" linkText="Completed Tasks" header="To-Do"/>,
  },
  {
    path: "/to-do-app/completed",
    element: <App href="/to-do-app/" linkText="Task List" header="Completed"/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);