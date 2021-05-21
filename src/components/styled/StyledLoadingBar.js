import styled, { withTheme } from "styled-components";

const LoadingBarOuter = styled.div`
border: 5px solid ${props => props.theme.displayArea.fg};
width: ${props => props.width ?? '300px'};
height: ${props => props.height ?? '30px'};
margin: 5px;
`

const LoadingBarInner = styled.div`
background-color: ${props => props.theme.displayArea.fg};
height: 100%;
width: ${props => props.percent ?? '0'}%;
`

function StyledLoadingBar(props) {
    const {percent, width, height} = props;



    return (
        <LoadingBarOuter
            width={width}
            height={height}>
            <LoadingBarInner percent={percent}/>
        </LoadingBarOuter>
    )
}

export default withTheme(StyledLoadingBar);