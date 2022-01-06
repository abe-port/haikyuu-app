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

const Page = styled.section`
  min-height:100vh;
  background: rgb(239, 239, 239);
  
`;



function App() {
  return (
    <Router>
      <Page>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Page>

    </Router>

  );
}

export default App;
