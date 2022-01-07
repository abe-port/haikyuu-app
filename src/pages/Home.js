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
import PlayerListing from '../components/Home/PlayerListing';

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
    const [players, setPlayers] = useState([
        {
            id: 0,
            first_name: 'Hinata',
            last_name: 'Shoyo',
            number: '10',
            height: '164.2',
            age: '16',
            hasPosition:true
        },
        {
            id: 1,
            first_name: 'Kageyama',
            last_name: 'Tobio',
            number: '9',
            height: '181.9',
            age: '16',
            hasPosition:true
        },
        {
            id: 2,
            first_name: 'Sawamura',
            last_name: 'Daichi',
            number: '1',
            height: '176.7',
            age: '18',
            hasPosition:true
        },
        {
            id: 3,
            first_name: 'Sugawara',
            last_name: 'Koshi',
            number: '2',
            height: '174.6',
            age: '18',
            hasPosition:true
        },
        {
            id: 4,
            first_name: 'Azumane',
            last_name: 'Asahi',
            number: '3',
            height: '186.4',
            age: '18',
            hasPosition:true
        },
        {
            id: 5,
            first_name: 'Nishinoya',
            last_name: 'Yu',
            number: '4',
            height: '160.5',
            age: '17',
            hasPosition:true
        },
    ]);

    const activePlayers = players.filter(player => player.hasPosition);

    return (
        <HomePageSection>
            <VolleyballCourtTool players={activePlayers}/>
            <PlayerListing players={players}/>
        </HomePageSection>
    );
}

export default Home