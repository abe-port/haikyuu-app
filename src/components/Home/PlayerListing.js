import { useState } from 'react';
import CourtSrc from '../../assets/img/court.png';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Player from './Player';
import {
    Link,
} from "react-router-dom";

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
margin-bottom:70px;

`;

const ListItem = styled.li`
border-bottom:1px solid #cccccc;
padding:15px;
display: flex;
font-size:14px;
line-height:16px;
position:relative;
transition: all .2s linear;
@media(min-width: 768px) {
    font-size:18px;
    line-height:22px
   }
${props => props.bolded && `
font-weight:800;
background: rgb(239, 239, 239)!important;
`};
&:nth-child(even){
    background:#cccccc;
}
&:hover{
    background:#F49030;
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

const EditIcon = styled.div`
position:absolute;
right:15px;
cursor:pointer;
.material-icons{
    font-size:16px;
    color:black;
    @media(min-width: 768px) {
        font-size:22px;
    }
}
`;


function PlayerListing(props) {

    const activePlayers = props.players.filter(player => player.hasPosition);
    const benchedPlayers = props.players.filter(player => !player.hasPosition);

    const onDragEnd = result => {
        console.log('hello')
    }

    return (
        <div>

            <DragDropContext onDragEnd={onDragEnd}>
                <PlayerListingHeader>
                    Active Players ({activePlayers.length}):
                </PlayerListingHeader>
                <Droppable droppableId={'activePlayers'}>
                    {provided => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <UnorderedList>
                                <ListItem bolded>
                                    <Name className="name">NAME</Name>
                                    <Number className="number">NUMBER</Number>
                                    <Position className="position">POSITION NUMBER</Position>
                                </ListItem>
                                {activePlayers.map((player, index) => (
                                    <Player player={player} key={`player${player.id}`} index={index} />
                                ))}
                                {provided.placeholder}
                            </UnorderedList>
                        </div>
                    )}

                </Droppable>
                <PlayerListingHeader>
                    Bench ({benchedPlayers.length}):
                </PlayerListingHeader>
                <Droppable droppableId={'benchedPlayers'}>
                    {provided => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <UnorderedList>
                                <ListItem bolded>
                                    <Name className="name">NAME</Name>
                                    <Number className="number">NUMBER</Number>
                                </ListItem>
                                {benchedPlayers.map((player, index) => (
                                    <Player player={player} key={`player${player.id}`} index={index} />
                                ))}
                                {provided.placeholder}
                            </UnorderedList>
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div>
    );
}

PlayerListing.defaultProps = {
    players: []
}

export default PlayerListing