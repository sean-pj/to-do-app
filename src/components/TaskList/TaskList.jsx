import { Button, Form, Accordion, Badge, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function ToDoBadge({dueDate}) {
    return (
        <Badge style={{marginLeft: "1rem"}} bg="secondary">{dueDate}</Badge>
    );
}

function TaskList({tasks, setTasks, setCompleted}) {

    const [headerInput, setHeader] = useState("")
    const [descInput, setDesc] = useState("")
    const [dueDate, setDueDate] = useState("")

    const taskSubmit = (e) => {
        e.preventDefault();
        setTasks((todo) => [...todo, {header: headerInput, description: descInput, due: dueDate}]);
        setHeader("");
        setDesc("");
        setDueDate("");
    };

    const deleteTask = (index) => {
        //Learned from https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
        setTasks(todo => todo.filter((_,i) => i !== index))
    };

    const completeTask = (todo) => {
        setCompleted((completed) => [...completed, todo])
    };

    const uncompleteTask = (index) => {
        setCompleted((completed) => completed.filter((_,i) => i !== index))
    };

    return (
        //defaultActiveKey="0"
        <>
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            {tasks.map((todo, index) => { 
                return(
                <Accordion.Item style={{position: "relative"}} key={index} eventKey={String(index)}> 
                <Accordion.Header> {todo.header} <ToDoBadge dueDate={todo.due} /></Accordion.Header>
                <Accordion.Body>
                {todo.description}
                </Accordion.Body>
                <div style={{position: "absolute", left: "105%", bottom: "10%", style: "inline", width: "14rem"}}>
                {setTasks == null ? <Button onClick={() => uncompleteTask(todo)} variant="warning">Remove</Button> : <Button onClick={() => completeTask(todo)} variant="success">Complete</Button>}
                <Button style={{marginLeft: "1rem"}} onClick={() => deleteTask(index)} variant="outline-danger">Delete</Button> 
                </div>
                </Accordion.Item>
            )})}
        </Accordion>
        {setTasks != null && <Form onSubmit={taskSubmit}>
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
        </Form>}
        </>
    )
}

export default TaskList