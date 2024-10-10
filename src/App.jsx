import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Row, Col} from "react-bootstrap";
import './App.css'
import TaskList from './components/TaskList/TaskList';

function App() {
  const style = {
    backgroundColor: "#242424",  // Make sure this is a valid CSS color
  };

  return (
    <Container style={style} className="vh-100 vw-100 d-flex justify-content-center align-items-center">
    <Row className='w-100'>
      <Col >
      <div>
        <h1>To-Do App</h1>
        <TaskList></TaskList>
      </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App
