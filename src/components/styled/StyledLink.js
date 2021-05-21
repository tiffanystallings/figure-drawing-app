import styled, { withTheme } from "styled-components";

const Link = styled.a`
    color: ${props => props.theme.link.color};

    &:hover {
        color: ${props => props.theme.link.hover}
    }
`

function StyledLink(props) {
    const {onClick, children} = props;

    return (<Link onClick={onClick}>{children}</Link>)
}

export default withTheme(StyledLink);