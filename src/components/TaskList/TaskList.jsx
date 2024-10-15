import { Button, Form, Accordion, Badge, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';



function CustomToggle({ children, eventKey }) {
    //Adapted from https://react-bootstrap.netlify.app/docs/components/accordion
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <Button className="mx-auto" style={{display:"block", margin: "1rem"}} type="button" variant="primary" onClick={decoratedOnClick} >{children} </Button>
    );
  }

function TaskList({tasks, setTasks, setCompleted, completed}) {

    const [headerInput, setHeader] = useState("")
    const [descInput, setDesc] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [badgeColor, setBadgeColor] = useState("secondary")

    const taskSubmit = (e) => {
        e.preventDefault();
        setTasks((todo) => [...todo, {header: headerInput, description: descInput, due: dueDate, badgeColor: badgeColor}]);
    };

    const deleteTask = (index) => {
        //Learned from https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
        setTasks(todo => todo.filter((_,i) => i !== index))
    };

    const completeTask = (todo, index) => {
        setCompleted((completed) => [...completed, todo])
        setTasks(todo => todo.filter((_,i) => i !== index))
    };

    const uncompleteTask = (todo, index) => {
        setTasks((oldToDo) => [...oldToDo, todo])
        setCompleted((completed) => completed.filter((_,i) => i !== index))
    };

    return (
        //defaultActiveKey="0"
        <>
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            {tasks.map((todo, index) => { 
                return(
                <Accordion.Item style={{position: "relative"}} key={index} eventKey={String(index)}> 
                <Accordion.Header> 
                    {todo.header} 
                    <Badge style={{marginLeft: "1rem"}} bg="secondary">{todo.due}</Badge>
                    <Badge style={{marginLeft: "1rem"}} bg={todo.badgeColor}>{todo.badgeColor == "danger" ? "High" : todo.badgeColor == "warning" ? "Moderate" : todo.badgeColor == "success" ? "Low" : "None"  }</Badge> 
                    </Accordion.Header>
                <Accordion.Body>
                {todo.description}
                </Accordion.Body>
                <div style={{position: "absolute", left: "105%", bottom: "10%", style: "inline", width: "14rem"}}>
                {completed ? <Button onClick={() => uncompleteTask(todo,index)} variant="warning">Remove</Button> : <Button onClick={() => completeTask(todo, index)} variant="success">Complete</Button>}
                <Button style={{marginLeft: "1rem"}} onClick={() => deleteTask(todo, index)} variant="outline-danger">Delete</Button> 
                </div>
                </Accordion.Item>
            )})}
        </Accordion>
        {setTasks != null && 
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            <CustomToggle eventKey="createTaskForm">+</CustomToggle>
            <Accordion.Item eventKey="createTaskForm">
                <Accordion.Body>
                    <Form onSubmit={taskSubmit}>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Task Header</Form.Label>
                                <Form.Control onChange={(e) => setHeader(e.target.value)} data-bs-theme="dark" type="text" placeholder="Do Laundry" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control onChange={(e) => setDueDate(e.target.value)} data-bs-theme="dark" type="date" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label>Task Description</Form.Label>
                                <Form.Control onChange={(e) => setDesc(e.target.value)} data-bs-theme="dark" as="textarea" placeholder="Gather clothes and put into washing machine" rows={3} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label>Badge</Form.Label>
                                <Form.Select onChange={(e) => setBadgeColor(e.target.value)}>
                                <option value="secondary">Open this select menu</option>
                                <option value="danger">High</option>
                                <option value="warning">Moderate</option>
                                <option value="success">Low</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Button className="mx-auto" style={{display: "block"}} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
        }
        </>
    )
}

export default TaskList