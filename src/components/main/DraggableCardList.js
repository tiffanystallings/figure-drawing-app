import _ from "lodash";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DraggableCardList ({className, children, ...rest}) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={className}>{children}</div>
        </DndProvider>
    );
}