import { Form, Button , Badge , Card, Modal , } from 'react-bootstrap';
import './App.css';
import Abcd from './a.js';
import Efg from './b.js';
import Hij from './c.js';
import OffCanvasExample from './sb.js';
import Fgh from './modal.js';

function App() {
  return (
    <div className="App">

      <Abcd />
      <Efg />
      <Hij />
      <OffCanvasExample />
      <Fgh />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
