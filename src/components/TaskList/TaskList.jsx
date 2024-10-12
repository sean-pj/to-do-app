import { Accordion, Badge, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function ToDoBadge({dueDate}) {
    return (
        <Badge style={{marginLeft: "1rem"}} bg="secondary">{dueDate}</Badge>
    );
}

function TaskList() {
    const [todos, setTodos] = useState([
        {header: "Just some demo tasks", description: "Description 1", due: "Monday"}, 
        {header: "As an example", description: "Description 2", due: "Tuesday"}
    ]);
    

    return (
        //defaultActiveKey="0"
        <Accordion className='w-25 mx-auto' data-bs-theme="dark">
            {todos.map((todo, index) => (
                <Accordion.Item key={index} eventKey={String(index)}> 
                <Accordion.Header>{todo.header} <ToDoBadge dueDate={todo.due} /> </Accordion.Header>
                <Accordion.Body>
                {todo.description}
                </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default TaskList