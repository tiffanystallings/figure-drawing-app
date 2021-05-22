import styled, { withTheme } from "styled-components";

const Image = styled.div`
    background: center / contain no-repeat url("${props => props.src}");
    width: 100%;
    flex-grow: 1
`

function StyledSessionImage (props) {
    const {src} = props;

    return  <Image src={src} />
}

export default withTheme(StyledSessionImage);