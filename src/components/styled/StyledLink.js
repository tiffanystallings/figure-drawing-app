import styled, { withTheme } from "styled-components";

const Link = styled.a`
    color: ${props => props.theme.link.color};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.link.hover}
    }
`

function StyledLink(props) {
    const {onClick, children, href} = props;

    const handleClick = (e) => {
        if (!!href) {
            window.open(href);
        }

        if (!!onClick) {
            onClick(e)
        }
    }

    return (<Link onClick={handleClick}>{children}</Link>)
}

export default withTheme(StyledLink);