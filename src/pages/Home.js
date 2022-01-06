import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import LogoSrc from '../assets/img/karasuno-removebg-preview.png';
import styled from 'styled-components';
import VolleyballCourtTool from '../components/Home/VolleyballCourtTool';

const HomePageSection = styled.section`
    max-width:1000px;
    margin:0 auto;
    padding: 20px;
    @media(min-width: 768px) {
        padding: 50px 0 100px;
       }
`;


function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <HomePageSection>
       <VolleyballCourtTool />
    </HomePageSection>
  );
}

export default Home