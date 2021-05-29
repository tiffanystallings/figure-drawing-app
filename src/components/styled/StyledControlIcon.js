import styled, { withTheme } from "styled-components";

const Icon = styled.button`
    font-size: 40px;
    color: ${props => props.theme.session.icons};
    background-color: transparent;
    border: 0;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    opacity: ${props => props.disabled ? '0.5' : '1'};
    font-family: sans-serif;
    min-width: 55px;
`

function StyledControlIcon (props) {
    const {children, disabled, onClick} = props;

    return(<Icon disabled={disabled} onClick={onClick}>{children}</Icon>)
}

export default withTheme(StyledControlIcon);