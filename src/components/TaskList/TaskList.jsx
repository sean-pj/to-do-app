import { Button, Form, Accordion, Badge, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

//Custom accordion toggle button
function CustomToggle({ children, eventKey }) {
    //Adapted from https://react-bootstrap.netlify.app/docs/components/accordion
  
    return (
      <Button className="mx-auto" style={{display:"block", margin: "1rem"}} type="button" variant="primary" onClick={useAccordionButton(eventKey)} >{children} </Button>
    );
  }

function TaskList({tasks, setTasks, setCompleted, completed}) {

    const [headerInput, setHeader] = useState("")
    const [descInput, setDesc] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [badge, setBadge] = useState("None")
    const [filter, setFilter] = useState("None")

    const taskSubmit = (e) => {
        e.preventDefault();
        setTasks((todo) => [...todo, {header: headerInput, description: descInput, due: dueDate, taskBadgeFilter: badge}]);
    };

    const deleteTask = (index) => {
        //Learned from https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
        setTasks(todo => todo.filter((_,i) => i !== index))
    };

    const deleteCompleted = (index) => {
        setCompleted((completed) => completed.filter((_,i) => i !== index))
    }

    const completeTask = (todo, index) => {
        setCompleted((completed) => [...completed, todo])
        deleteTask(index)
    };

    const uncompleteTask = (todo, index) => {
        setTasks((oldToDo) => [...oldToDo, todo])
        deleteCompleted(index)
    };

    const updateFilter = (e) => {
       setFilter(e.target.value)
    }

    return (
        //defaultActiveKey="0"
        <>
        <Form className="mx-auto w-50" data-bs-theme="dark" style={{color: "white"}} >
        <Form.Check name="priority" inline type='radio' label='High' value='High' onChange={updateFilter}/>
        <Form.Check name="priority" inline type='radio' label='Moderate' value='Moderate' onChange={updateFilter}/>
        <Form.Check name="priority" inline type='radio' label='Low' value='Low' onChange={updateFilter}/>
        <Form.Check name="priority" inline type='radio' label='None' value='None' defaultChecked onChange={updateFilter}/>
        </Form>
        {/* Tasks are divided into accordions */}
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            {tasks.map((todo, index) => {
                return(
                    <div key={index}>
                    {/* Check if badge matches filters */}
                    {(todo.taskBadgeFilter == filter || filter == "None") && 
                        <Accordion.Item style={{position: "relative"}} key={index} eventKey={String(index)}> 
                        <Accordion.Header> 
                            {todo.header} 
                            {/* Due date badge and priority tag */}
                            <Badge style={{marginLeft: "1rem"}} bg="secondary">{todo.due}</Badge>
                            <Badge style={{marginLeft: "1rem"}} bg={todo.taskBadgeFilter == "High" ? "danger" 
                                : todo.taskBadgeFilter == "Moderate" ? "warning"
                                : todo.taskBadgeFilter == "Low" ? "success"
                                : "secondary"  }>
                                {todo.taskBadgeFilter}
                            </Badge> 
                            </Accordion.Header>
                        <Accordion.Body>
                            {todo.description}
                        </Accordion.Body>
                        {/* Complete/Remove/Delete Buttons */}
                        <div style={{position: "absolute", left: "105%", bottom: "10%", style: "inline", width: "14rem"}}>
                        {completed ? <Button onClick={() => uncompleteTask(todo,index)} variant="warning">Remove</Button> 
                        : <Button onClick={() => completeTask(todo, index)} variant="success">Complete</Button>}
                        <Button style={{marginLeft: "1rem"}} onClick={completed ? ()=> deleteCompleted(index) : () => deleteTask(index)} variant="outline-danger">Delete</Button> 
                        </div>
                        </Accordion.Item>
                    }
                    </div>
            )})}
        </Accordion>
        {/* Form for task creation */}
        {!completed && 
        <Accordion className='w-50 mx-auto' data-bs-theme="dark">
            {/* create form button */}
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
                                <Form.Select onChange={(e) => setBadge(e.target.value)}>
                                <option value="None">Open this select menu</option>
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
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