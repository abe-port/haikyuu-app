import { useState } from 'react';
import CourtSrc from '../../assets/img/court.png';
import styled from 'styled-components';

const PlayerListingHeader = styled.h3`
font-size:16px;
margin-bottom: 0;
@media(min-width: 768px) {
    font-size:24px;
   }
`;

const UnorderedList = styled.ul`
list-style-type:none;
padding-inline-start: 0px;
`;

const ListItem = styled.li`
border-bottom:1px solid #cccccc;
padding:15px;
display: flex;
font-size:14px;
line-height:16px
@media(min-width: 768px) {
    font-size:18px;
    line-height:22px
   }
${props => props.bolded && `
font-weight:800
`};
&:nth-child(even){
    background:#cccccc;
}
`;

const Name = styled.div`
width:33%;
`;

const Number = styled.div`
width:33%;
`;

const Position = styled.div`
width:33%;
`;

function PlayerListing(props) {

    return (
        <div>
            <PlayerListingHeader>
                Players ({props.players.length}):
            </PlayerListingHeader>
            <UnorderedList>
                <ListItem bolded>
                    <Name className="name">NAME</Name>
                    <Number className="number">NUMBER</Number>
                    <Position className="position">POSITION NUMBER</Position>
                </ListItem>
                {props.players.map((player, index) => (
                    <ListItem key={index}>
                        <Name className="name">{player.first_name} {player.last_name}</Name>
                        <Number className="number">{player.number}</Number>
                        <Position className="position">{player.position}</Position>
                    </ListItem>
                ))}
            </UnorderedList>
        </div>
    );
}

PlayerListing.defaultProps = {
    players: []
}

export default PlayerListing