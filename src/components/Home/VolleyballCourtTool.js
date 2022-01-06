import { useState } from 'react';
import CourtSrc from '../../assets/img/court.png';
import styled from 'styled-components';

const CourtImage = styled.div`
  background-image: url(${CourtSrc});
  width:100%;
  background-size:cover;
`;



function VolleyballCourtTool(props) {

    return (
        <div>
            <CourtImage>
                <img src='/court.png' alt='Volleyball Court' style={{visibility: "hidden", height: '100%', width: '100%'}}/>
            </CourtImage>
        </div>
    );
}


export default VolleyballCourtTool