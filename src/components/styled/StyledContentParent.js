import styled from "styled-components";

export default function StyledContentParent(props) {
    const Parent = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: ${props.flexDirection};
    `

    return (<Parent>{props.children}</Parent>);
}

