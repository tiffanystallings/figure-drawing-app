import styled, { withTheme } from "styled-components";

const LoadingBarOuter = styled.div`
border: 2px solid ${props => props.theme.displayArea.fg};
border-radius: 10px;
width: ${props => props.width ?? '300px'};
height: ${props => props.height ?? '30px'};
margin: 10px;
`

const LoadingBarInner = styled.div`
background-color: ${props => props.theme.displayArea.fg};
height: 100%;
border-radius: 5px;
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