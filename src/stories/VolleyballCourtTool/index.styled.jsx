import CourtSrc from '../../assets/img/court.png';
import ProfilePic from '../../assets/img/user.png';
import styled from 'styled-components';

export const CourtContainer = styled.div`
    position:relative;
`;

export const CourtImage = styled.div`
  background-image: url(${CourtSrc});
  width:100%;
  background-size:cover;
`;

export const Player = styled.div.attrs(props => ({
    type: 'text',
    className: props.player,
}))`
    position:absolute;
    left: 0;
    top: 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:30%;
    img{
        width:20%;
        margin-bottom:5px;
    }
    .name{
        font-size:12px;
        @media(min-width: 768px) {
            font-size:16px;
        }
    }
    @media(min-width: 768px) {
        width:auto;
    }
    &.player1{
        top:60%;
        left:0;
    }
    &.player2{
        top:60%;
        left:29%;
    }
    &.player3{
        top:40%;
        left:29%;
    }
    &.player4{
        top:20%;
        left:29%;
    }
    &.player5{
        top:20%;
        left:0;
    }
    &.player6{
        top:40%;
        left:0;
    }
`;
