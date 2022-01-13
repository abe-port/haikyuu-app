import * as Styled from './index.styled';
import ProfilePic from '../../assets/img/user.png';
import PropTypes from 'prop-types';


export const VolleyballCourtTool = ({...props }) => {

    return (
        <Styled.CourtContainer>
            <Styled.CourtImage>
                <img src='/court.png' alt='Volleyball Court' style={{ visibility: "hidden", height: '100%', width: '100%' }} />

                {props.players.map((player, index) => (
                    <Styled.Player player={`player${index+1}`} key={index}>
                        <img src={ProfilePic} alt="Logo" />
                        <div className="name"><span style={{fontWeight:'bold'}}>{player.number}</span> {player.first_name} {player.last_name} </div>
                    </Styled.Player>
                ))}

            </Styled.CourtImage>
        </Styled.CourtContainer>
    );
}


VolleyballCourtTool.propTypes = {
    players: PropTypes.array,
};

VolleyballCourtTool.defaultProps = {
    players: [],
};
