import LogoSrc from '../../assets/img/karasuno-removebg-preview.png';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const Nav = styled.section`
  background-color: rgb(199, 92, 20);
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  min-height: 60px;
  width:100vw;
  position:fixed;
  bottom:0;
  left:0;
  height:60px;
  @media(min-width: 768px) {
   position:relative
  }

`;

const HeaderCopy = styled.h1`
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    color: white;
    margin-left: 12px;
    display:none;
    @media(min-width: 768px) {
        display:block;
       }
`;

const NavItemContainer = styled.div`
    width:100%;
    max-width: 1000px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    margin: 0 auto;
    padding:0 15px;
    @media(min-width: 768px) {
        padding:0;
        position:relative
       }
`;

const HeaderImage = styled.div`
  background-image: url(${LogoSrc});
  width:40px;
  height:40px;
  background-size:contain;
`;

function Header() {
    // Declare a new state variable, which we'll call "count"
    return (
        <Nav>
            <NavItemContainer>
                <Link to='/'>
                    <HeaderImage />
                </Link>
                <HeaderCopy>Coach Ukai's Training Grounds</HeaderCopy>
            </NavItemContainer>
        </Nav>
    );
}

export default Header