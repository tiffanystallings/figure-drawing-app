import styled, { withTheme } from "styled-components"

function StyledHeading(props) {
    const Heading = styled.h1`
        font-family: ${props => props.theme.header.font};
            color: ${props => props.theme.header.fg};
            font-size: 50px;
            margin-bottom: 0;
    `;

    return (<Heading>{props.children}</Heading>);
}

export default withTheme(StyledHeading);