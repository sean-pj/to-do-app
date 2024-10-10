import { Container, Row, Col} from "react-bootstrap";
import './App.css'
import TaskList from './components/TaskList/TaskList';
import { Link } from "react-router-dom";

function App({component, href, linkText}) {
  const style = {
    backgroundColor: "#242424",
    textAlign: "center",
  };

  return (
    <Container style={style} className="vh-100 d-flex justify-content-center align-items-center">
    <Row className='w-100'>
      <Col >
      {component}
      <div style={{margin: "1rem"}}>
      <Link to={href}>{linkText}</Link>
      </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App
