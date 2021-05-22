import styled from "styled-components"

const ControlBar = styled.div`
    height: 60px;
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: ${props => props.theme.session.toolbar};
    color: ${props => props.theme.session.icons};
`

export default function StyledControlBar ({children}) {
    return(<ControlBar>{children}</ControlBar>)
}