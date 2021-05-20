import styled, { withTheme } from "styled-components"

function StyleSubHeading(props) {
    const SubHeading = styled.p`
        color: ${props => props.theme.header.subtitle};
        font-size: 20px;
        margin-top: 10px;
    `
    
    return (<SubHeading>{props.children}</SubHeading>)
}

export default withTheme(StyleSubHeading);