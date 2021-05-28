import styled, { withTheme } from "styled-components";
import StyledContentArea from "./StyledContentArea";

const AlternateContentArea = styled(StyledContentArea)`
&&& {
    background: linear-gradient(0deg, ${props => props.theme.displayArea.gradStart} 0%, ${props => props.theme.displayArea.gradEnd} 100%);
    border: 2px solid ${props => props.theme.displayArea.bg};
    height: ${props => props.maxHeight ?? '300px'};
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
}
`

function StyledAlternateContentArea(props) {
    const {
        children, 
        width,
        margin,
        padding,
        maxHeight
    } = props;


    return(
        <AlternateContentArea
            maxHeight={maxHeight}
            width={width}
            padding={padding}
            margin={margin}>
            {children}
        </AlternateContentArea>)
}

export default withTheme(StyledAlternateContentArea);