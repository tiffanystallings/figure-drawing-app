import styled, { withTheme } from "styled-components";

const ContentArea = styled.div`
    width: 100%;
    max-width: ${props => props.width ?? '100%'};
    min-height: ${props => props.height ?? '0'};
    background-color: ${props => props.theme.main.bg};
    color: ${props => props.theme.main.fg};
    font-family: ${props => props.theme.main.font};
    padding: ${props => props.padding ?? '15px'};
    margin: ${props => props.margin ?? '15px auto'};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.flexDirection ?? 'row'};
    ${props => (props.flexDirection === 'column' ? 
        `align-items: ${props.justify ?? 'flex-start'};` : 
        `justify-content: ${props.justify ?? 'flex-start'};`)}
    ${props => (props.flexDirection !== 'column' ? 
        `align-items: ${props.align ?? 'flex-start'};` : 
        `justify-content: ${props.align ?? 'flex-start'};`)}

`

function StyledContentArea(props) {
    const {
        width,
        height,
        flexDirection,
        justify,
        align,
        padding,
        margin,
        children,
        className
    } = props;

    return (
        <ContentArea 
            width={width}
            height={height}
            flexDirection={flexDirection}
            justify={justify}
            align={align}
            padding={padding}
            margin={margin}
            className={className}>
            {children}
        </ContentArea>);
}

export default withTheme(StyledContentArea);