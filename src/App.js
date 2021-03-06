import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import { Button, Accordion, Card } from 'react-bootstrap';
import { ReactComponent as ReactIcon } from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';

function App() {
  const user = {
    nombre: "Luis García",
    edad: 37
  }

  const saludarFn = name => {
    // alert("Hola " + name);
    // Usando template strings 
    alert(`Hola ${name}`);
  };

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar]     = useState(0);

  useEffect(() => {
    console.log("Total " + contar);
  }, [contar]);
  
  const encenderApagar = () => {
    console.log('Encender | Apagar');
    // se le manda el valor contrario que tenga stateCar a setStateCar con el signo de admiración
    // setStateCar(!stateCar);
    // obteniendo el valor previo del state:
    setStateCar(prevValue => !prevValue);
    setContar(contar + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Link to = "/">
              <button variant="primary">Home</button>
            </Link>
            <Link to = "/contacto">
              <button variant="primary">Contacto</button>
            </Link>
            <Link to = "/quien-soy">
              <button variant="primary">Quien soy</button>
            </Link>
          </div>

          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/quien-soy">
              <QuienSoy />
            </Route>
          </Switch>
        </Router>
        <h2>El coche está: {stateCar === true ? 'Encendido' : 'Apagado'}</h2>
        <Button variant="primary" onClick={encenderApagar}>Encender | Apagar</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Saludar userInfo = {user} saludarFn = {saludarFn}/>

        <h1>React Bootstrap</h1>
        <Button variant="primary">Primary</Button>

        <h1>Acordion</h1>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <ReactIcon></ReactIcon>
      </header>
    </div>
  );
}

export default App;
