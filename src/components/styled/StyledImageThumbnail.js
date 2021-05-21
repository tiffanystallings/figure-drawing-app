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
`

const RemoveButton = styled.button`
background-color: red;
color: white;
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

    const handleRemove = () => {
        onRemove()
    }

    return (
        <StyledThumbnail>
            <StyledImage src={src}/>
            <RemoveButton onClick={handleRemove}>X</RemoveButton>
        </StyledThumbnail>
    )
}

export default withTheme(StyledImageThumbnail)