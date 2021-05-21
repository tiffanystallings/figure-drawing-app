import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export default function DraggableCard({children, onDrag, index, id, className}) {
    const ITEM_TYPE = 'CARD';
    const ref = useRef(null);

    const [{isOver}, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: item => {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            onDrag(dragIndex, hoverIndex);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }), [index])

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { type: ITEM_TYPE, id, index},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    drag(drop(ref))

    return (
        <div 
            ref={ref} 
            className={className}
            style={{
                opacity: isDragging ? 0.5 : 1,
                border: isOver ? '1px dashed black' : 0
            }}>
                {children}
        </div>
    );
}