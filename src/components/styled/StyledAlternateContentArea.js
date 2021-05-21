import styled, { withTheme } from "styled-components";
import StyledContentArea from "./StyledContentArea";

const AlternateContentArea = styled(StyledContentArea)`
&&& {
    background-color: ${props => props.theme.displayArea.bg};
    border: 3px solid ${props => props.theme.displayArea.fg};
    max-height: ${props => props.maxHeight ?? '400px'};
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