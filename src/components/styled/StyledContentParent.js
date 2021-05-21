import styled from "styled-components";

const Parent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection};
`
export default function StyledContentParent(props) {
    return (<Parent flexDirection={props.flexDirection}>{props.children}</Parent>);
}

