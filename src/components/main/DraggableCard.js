import { useDrag } from 'react-dnd';

export default function DraggableCard({children, onDrag, row, className, ...rest}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD',
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div 
            ref={drag} 
            className={className}
            style={{opacity: isDragging ? 0.5 : 1}}>
                {children}
        </div>
    );
}