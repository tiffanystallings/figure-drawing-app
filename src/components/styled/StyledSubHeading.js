import styled, { withTheme } from "styled-components"

const SubHeading = styled.p`
color: ${props => props.theme.header.subtitle};
font-size: 20px;
margin-top: 10px;
`

function StyleSubHeading(props) {
    return (<SubHeading>{props.children}</SubHeading>)
}

export default withTheme(StyleSubHeading);