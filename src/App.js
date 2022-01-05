import logo from './logo.svg';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Header from './components/_partials/Header';


const Button = styled.button`background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;`

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
