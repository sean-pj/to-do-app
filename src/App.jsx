import { Container, Row, Col} from "react-bootstrap";
import './App.css'
import TaskList from './components/TaskList/TaskList';
import { Link } from "react-router-dom";
import { useState } from "react";

function App({href, linkText, header}) {
  
  //To-do list tasks
  const [todos, setTodos] = useState([
    {header: "Demo tasks", description: "Description 1", due: "Monday", badgeColor: "secondary"}, 
    {header: "examples", description: "Description 2", due: "Tuesday", badgeColor: "secondary"}
  ]);

  //Completed list tasks
  const [completed, setCompleted] = useState([{header: "Some example completed tasks", description: "Description 1", due: "Monday", badgeColor: "secondary"}]);

  const style = {
    margin: "1rem",
    textAlign: "center" , 
    display: "block"
  }

  return (
    <Container style={{backgroundColor: "#242424"}} className="vh-100 d-flex justify-content-center align-items-center">
    <Row className='w-100'>
      <Col>
      <h1 style={style}>{header}</h1>
      {header == "To-Do" ? 
      //To do list
      <TaskList completed={false} tasks={todos} setTasks={(tasks) => setTodos(tasks)} setCompleted={(completed) => setCompleted(completed)}></TaskList> : 
      //Completed list
      <TaskList completed={true} tasks={completed} setTasks={(tasks) => setTodos(tasks)} setCompleted={(completed) => setCompleted(completed)}></TaskList>}
      <Link style={style} to={href}>{linkText}</Link>
      </Col>
    </Row>
    </Container>
  );
}

export default App
