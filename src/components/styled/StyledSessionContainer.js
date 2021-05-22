import styled, { withTheme } from "styled-components";

const Main = styled.main`
    background-color: ${props => props.theme.session.bg};
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 10;
`

function StyledSessionContainer (props) {
    const {children} = props;

    return <Main>{children}</Main>
}

export default withTheme(StyledSessionContainer);