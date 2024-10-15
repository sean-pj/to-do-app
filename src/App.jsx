import { Container, Row, Col} from "react-bootstrap";
import './App.css'
import TaskList from './components/TaskList/TaskList';
import { Link } from "react-router-dom";
import { useState } from "react";

function App({href, linkText, header}) {
  const [todos, setTodos] = useState([
    {header: "Just some demo tasks", description: "Description 1", due: "Monday"}, 
    {header: "As an example", description: "Description 2", due: "Tuesday"}
  ]);

  const [completed, setCompleted] = useState([{header: "Demo completed", description: "Description 1", due: "Monday"}]);

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
      {header == "To-Do" ? <TaskList tasks={todos} setTasks={(tasks) => setTodos(tasks)} setCompleted={(completed) => setCompleted(completed)}></TaskList> : <TaskList tasks={completed}></TaskList>}
      <Link style={style} to={href}>{linkText}</Link>
      </Col>
    </Row>
    </Container>
  );
}

export default App
