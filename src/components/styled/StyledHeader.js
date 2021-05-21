import styled, { withTheme } from "styled-components"

const Header = styled.header`
width: 100%;
height: 150px;
margin: 0;
box-sizing: border-box;
background-color: ${props => props.theme.header.bg};
display: flex;
flex-direction: column;
align-items: center;
font-family: ${props => props.theme.main.font};
`;

function StyledHeader(props) {
    return <Header>{props.children}</Header>;
};

export default withTheme(StyledHeader);