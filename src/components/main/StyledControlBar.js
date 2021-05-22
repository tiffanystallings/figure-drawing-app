import styled from "styled-components"

const ControlBar = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: ${props => props.theme.session.toolbar};
    color: ${props => props.theme.session.icon};
`

export default function StyledControlBar ({children}) {
    return(<ControlBar>{children}</ControlBar>)
}