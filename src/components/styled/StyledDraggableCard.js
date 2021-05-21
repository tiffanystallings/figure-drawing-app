import styled, { withTheme } from "styled-components"
import DraggableCard from "../main/DraggableCard";

const Card = styled(DraggableCard)`
    margin: 5px 0;
    padding: 5px;
    width: 100%;
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.fg};
    border-radius: 3px;
    display: flex;
    cursor: grab;
    align-items: center;
`

const CardIcon = styled.i`
    font-size: 20px;
    padding: 0 10px 5px;
    font-style: normal;
    border: 0;
    background-color: transparent;
    color: ${props => props.theme.button.fg};
    cursor: pointer;
`

const CardContent = styled.div`
    text-align: center;
    flex-grow: 1;
`


function StyledDraggableCard ({children, id, index, onDrag, onRemove}) {
    return (
        <Card id={id} index={index} onDrag={onDrag}>
            <CardIcon>↕</CardIcon>
            <CardContent>{children}</CardContent>
            <CardIcon as="button" onClick={onRemove}>✖</CardIcon>
        </Card>
    );
}

export default withTheme(StyledDraggableCard);