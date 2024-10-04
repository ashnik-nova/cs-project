import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const WidgetsList = [
  { id: '1', content: 'Alarm and Sound' },
  { id: '2', content: 'Chart' },
  { id: '3', content: 'Map' },
  { id: '4', content: 'Gauge' }
];

const Widgets = () => {
  return (
    <>
      {WidgetsList.map((widget, index) => (
        <Draggable key={widget.id} draggableId={widget.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="p-4 bg-white rounded shadow cursor-pointer mb-2"
            >
              {widget.content}
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Widgets;
