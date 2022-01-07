import { useState } from 'react';
import CourtSrc from '../../assets/img/court.png';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
    Link,
} from "react-router-dom";


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
   ${({ rowNum }) => rowNum % 2 == 0 && `
   background: #cccccc;
 `}
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


function Player(props) {

    return (
  

     
        <Draggable  draggableId={`player${props.player.id}`} index={props.index}>
            {(provided) => (
                    <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                <ListItem rowNum={props.index}>
                    <Name className="name">{props.player.first_name} {props.player.last_name}</Name>
                    <Number className="number">{props.player.number}</Number>
                    {props.player.hasPosition && <Position className="position">{props.index + 1}</Position>}
                    {/* <Link to={`players/${props.player.id}`}>
<EditIcon><span className="material-icons">
edit
</span>
</EditIcon>
</Link> */}
                </ListItem>
                </div>
            )}

        </Draggable>

    );
}

Player.defaultProps = {
    player: {}
}

export default Player