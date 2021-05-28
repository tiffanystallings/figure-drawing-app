import { useState } from "react";
import styled, { withTheme } from "styled-components";

const Image = (props) => (
    <img className={props.className} src={props.src} alt="Preview of a selected reference" />
)

const StyledImage = styled(Image)`
height: 150px;
border: 1px solid black;
border-radius: 3px;
margin: 0;
`

const StyledThumbnail = styled.div`
border: 5px solid white;
border-radius:3px;
margin: 5px;
height: 160px;
position: relative;
display: ${props => props.hidden ? 'none' : 'block'}
`

const RemoveButton = styled.button`
background-color: ${props => props.theme.button.bg};
color: white;
font-weight: bold;
border-radius: 0;
border: 0;
position: absolute;
height: 25px;
width: 25px;
right: 0;
cursor: pointer;
`

function StyledImageThumbnail(props) {

    const {src, onRemove} = props;
    const [hidden, setHidden] = useState(false);

    const handleRemove = () => {
        setHidden(true);

        // Force react to hide first THEN remove from store
        setTimeout(() => {
            onRemove();
        });
    }

    return (
        <StyledThumbnail hidden={hidden}>
            <StyledImage src={src}/>
            <RemoveButton onClick={handleRemove}>✖</RemoveButton>
        </StyledThumbnail>
    )
}

export default withTheme(StyledImageThumbnail)