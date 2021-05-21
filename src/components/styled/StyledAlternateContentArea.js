import styled, { withTheme } from "styled-components";
import StyledContentArea from "./StyledContentArea";

const AlternateContentArea = styled(StyledContentArea)`
&&& {
    background-color: ${props => props.theme.displayArea.bg};
    border: 2px solid ${props => props.theme.displayArea.fg};
    height: ${props => props.maxHeight ?? '300px'};
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: auto;
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