import styled, { withTheme } from "styled-components";

const Button = styled.button`
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.fg};
    padding: 5px 100px;
    border-radius: 3px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    border: 5px solid ${props => props.theme.button.bg};
    transition: transform 0.5s ease-in-out;
    opacity: ${props => props.disabled ? '0.7' : '1'};
    font-size: 16px;

    &:hover {
        ${props => !props.disabled && 'transform: scale(1.05)'};
    }
`

function StyledButton(props) {
    const {children, onClick, disabled} = props;

    return (
        <Button onClick={onClick} disabled={disabled}>{children}</Button>
    )
}

export default withTheme(StyledButton);