import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const Button = styled(Link)`
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.fg};
    padding: 5px 100px;
    border-radius: 3px;
    cursor: 'pointer';
    border: 5px solid ${props => props.theme.button.bg};
    transition: transform 0.5s ease-in-out;
    opacity: ${props => props.disabled ? '0.7' : '1'};
    font-size: 16px;
    text-decoration: none;

    &:hover {
        'transform: scale(1.05)'};
    }
`

const FakeButton = styled.span`
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.fg};
    padding: 5px 100px;
    border-radius: 3px;
    border: 5px solid ${props => props.theme.button.bg};
    opacity: 0.7;
    font-size: 16px;
    text-decoration: none;
`

function StyledButton(props) {
    const {children, disabled, to, state} = props;

    return (
        <>
            {!disabled ? (
                <Button to={to} state={state}>{children}</Button>
            ) : (
                <FakeButton>{children}</FakeButton>
            )}
        </>
    )
}

export default withTheme(StyledButton);