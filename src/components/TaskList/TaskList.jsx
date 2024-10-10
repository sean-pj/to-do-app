import { ListGroup, Container, Row, Col} from "react-bootstrap";

function TaskList() {
    return (
                    <ListGroup className='w-25 mx-auto' data-bs-theme="dark">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
    )
}

export default TaskList