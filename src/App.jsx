import { Container, Row, Col} from "react-bootstrap";
import './App.css'
import TaskList from './components/TaskList/TaskList';
import { Link } from "react-router-dom";

function App({component, href, linkText, header}) {
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
      {component}
      <Link style={style} to={href}>{linkText}</Link>
      </Col>
    </Row>
    </Container>
  );
}

export default App
