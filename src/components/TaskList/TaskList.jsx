import { Accordion, ListGroup, Container, Row, Col, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";

function TaskList() {

    return (
        //defaultActiveKey="0"
        <Accordion className='w-25 mx-auto' data-bs-theme="dark">
            <Accordion.Item eventKey="0"> 
                <Accordion.Header>Example Task #1</Accordion.Header>
                <Accordion.Body>
                Description 2
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Example Task #2</Accordion.Header>
                <Accordion.Body>
                Description 1
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default TaskList