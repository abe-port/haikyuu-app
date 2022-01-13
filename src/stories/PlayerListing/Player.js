import * as Styled from './index.styled';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Player(props) {

    return (
  

     
        <Draggable  draggableId={`player${props.player.id}`} index={props.index}>
            {(provided) => (
                    <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                <Styled.ListItem rowNum={props.index}>
                    <Styled.Name className="name">{props.player.first_name} {props.player.last_name}</Styled.Name>
                    <Styled.Number className="number">{props.player.number}</Styled.Number>
                    {props.player.hasPosition && <Styled.Position className="position">{props.index + 1}</Styled.Position>}
    
                </Styled.ListItem>
                </div>
            )}

        </Draggable>

    );
}

Player.defaultProps = {
    player: {}
}

export default Player