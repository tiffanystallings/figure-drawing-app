import styled, { withTheme } from "styled-components";
import DraggableCardList from "../main/DraggableCardList";

const List = styled(DraggableCardList)`
    display: 'flex';
    flex-direction: 'column';
    width: 100%;
`

function StyledDraggableList (props) {
    const {children} = props;

    return <List>{children}</List>
}

export default withTheme(StyledDraggableList);