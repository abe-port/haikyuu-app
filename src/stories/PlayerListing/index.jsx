import { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Styled from './index.styled';
import Player from './Player';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const PlayerListing = ({ ...props }) => {


    const onDragEnd = result => {


    }


    return (
        <div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Styled.PlayerListingHeader>
                    Active Players ({props.players.length}):
                </Styled.PlayerListingHeader>
                <Droppable droppableId={'activePlayers'}>
                    {provided => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Styled.UnorderedList>
                                <Styled.ListItem bolded>
                                    <Styled.Name className="name">NAME</Styled.Name>
                                    <Styled.Number className="number">NUMBER</Styled.Number>
                                    <Styled.Position className="position">POSITION NUMBER</Styled.Position>
                                </Styled.ListItem>
                                {props.players.map((player, index) => (
                                    <Player player={player} key={`player${player.id}`} index={index} />
                                ))}
                                {provided.placeholder}
                            </Styled.UnorderedList>
                        </div>
                    )}

                </Droppable>

            </DragDropContext>
        </div>
    );
}

PlayerListing.propTypes = {
    players: PropTypes.array,
};

PlayerListing.defaultProps = {
    players: []
}
