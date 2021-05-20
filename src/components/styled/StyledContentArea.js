import styled, { withTheme } from "styled-components";

function StyledContentArea(props) {
    const {
        width,
        height,
        theme,
        flexDirection,
        justify,
        align,
        padding,
        margin
    } = props;

    const ContentArea = styled.div`
        width: 100%;
        max-width: ${width ?? '100%'};
        min-height: ${height ?? '0'};
        background-color: ${theme.main.bg};
        color: ${theme.main.fg};
        font-family: ${theme.main.font};
        padding: ${padding ?? '15px'};
        margin: ${margin ?? '15px auto'};
        display: flex;
        flex-direction: ${flexDirection ?? 'row'};
        ${flexDirection === 'column' ? 
            `align-items: ${justify ?? 'flex-start'};` : 
            `justify-content: ${justify ?? 'flex-start'};`};
        ${flexDirection !== 'column' ? 
            `align-items: ${align ?? 'flex-start'};` : 
            `justify-content: ${align ?? 'flex-start'};`};

    `

    return (<ContentArea>{props.children}</ContentArea>);
}

export default withTheme(StyledContentArea);