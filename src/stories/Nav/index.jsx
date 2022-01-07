import * as Styled from './index.styled';
import PropTypes from 'prop-types';


export const Header = ({ backgroundColor, label, ...props }) => {
    // Declare a new state variable, which we'll call "count"
    return (
        <Styled.Nav backgroundColor={backgroundColor}>
            <Styled.NavItemContainer>
                <a href="/">
                    <Styled.HeaderImage />
                </a>
                <Styled.HeaderCopy>{label}</Styled.HeaderCopy>
            </Styled.NavItemContainer>
        </Styled.Nav>
    );
}

Header.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};

Header.defaultProps = {
    backgroundColor: null,
};
