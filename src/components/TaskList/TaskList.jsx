import { Button, Form, Accordion, Badge, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
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

    const [headerInput, setHeader] = useState("")
    const [descInput, setDesc] = useState("")
    const [dueDate, setDueDate] = useState("")

    const taskSubmit = (e) => {
        e.preventDefault();
        setTodos((todo) => [...todo, {header: headerInput, description: descInput, due: dueDate}]);
        setHeader("");
        setDesc("");
        setDueDate("");
    };

    const deleteTask = (index) => {
        //Learned from https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
        setTodos(todo => todo.filter((_,i) => i !== index))
    }

    return (
        //defaultActiveKey="0"
        <>
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            {todos.map((todo, index) => { 
                return(
                <Accordion.Item style={{position: "relative"}} key={index} eventKey={String(index)}> 
                <Accordion.Header> {todo.header} <ToDoBadge dueDate={todo.due} /></Accordion.Header>
                <Accordion.Body>
                {todo.description}
                </Accordion.Body>
                <Button onClick={() => deleteTask(index)} style={{position: "absolute", left: "105%", bottom: "10%"}} variant="outline-danger">Delete</Button>
                </Accordion.Item>
            )})}
        </Accordion>
        <Form onSubmit={taskSubmit}>
            <Form.Group>
                <Form.Label>Task Header</Form.Label>
                <Form.Control onChange={(e) => setHeader(e.target.value)} data-bs-theme="dark" type="text" placeholder="Do Laundry" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Task Description</Form.Label>
                <Form.Control onChange={(e) => setDesc(e.target.value)} data-bs-theme="dark" as="textarea" placeholder="Gather clothes and put into washing machine" rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Control onChange={(e) => setDueDate(e.target.value)} data-bs-theme="dark" type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default TaskList