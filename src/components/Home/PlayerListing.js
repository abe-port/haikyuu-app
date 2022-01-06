import { useState } from 'react';
import CourtSrc from '../../assets/img/court.png';
import styled from 'styled-components';

function PlayerListing(props) {

    return (
        <div>
            Players ({props.players.length}):
            <div>
            {props.players.map((player, index) => (
        <li key={index}> {player.first_name} {player.last_name}</li>
      ))}
            </div>
        </div>
    );
}

PlayerListing.defaultProps = {
    players: []
}

export default PlayerListing