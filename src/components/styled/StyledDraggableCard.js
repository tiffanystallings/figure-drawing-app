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
    padding: 0 10px;
`

const CardContent = styled.div`
    text-align: center;
    flex-grow: 1;
`


function StyledDraggableCard ({children}) {
    return (
        <Card>
            <CardIcon>↕</CardIcon>
            <CardContent>{children}</CardContent>
        </Card>
    );
}

export default withTheme(StyledDraggableCard);