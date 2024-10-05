import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ChartWidget from '../Widget/Chart';
import GaugeWidget from '../Widget/Gauge';

const WidgetsList = [
  { id: "1", content: "Chart" },
  { id: "2", content: "Gauge" },
];

const DeviceDetail = () => {
  const [widgets, setWidgetsList] = React.useState(WidgetsList);
  const [dashboardWidgets, setDashboardWidgets] = React.useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === "widgetBox" && destination.droppableId === "widgetBox") {
      const items = Array.from(widgets);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      setWidgetsList(items);
    }

    if (source.droppableId === "widgetBox" && destination.droppableId === "dashboard") {
      const newWidget = widgets[source.index];
      setDashboardWidgets([newWidget]);
    }
  };

  const renderWidget = (widget) => {
    switch (widget.id) {
      case '1':
        return <ChartWidget />;
      case '2':
        return <GaugeWidget />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="widgetBox">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-1/4 p-4 bg-gray-200"
            >
              <h2 className="font-bold mb-4">Widget Box</h2>
              {widgets.map((widget, index) => (
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-3/4 p-4 bg-white border-l border-gray-300"
            >
              <h2 className="font-bold mb-4">Dashboard</h2>
              {dashboardWidgets.length === 0 ? (
                <p className="text-gray-400">Drag widgets here</p>
              ) : (
                dashboardWidgets.map((widget) => (
                  <div key={widget.id} className="p-4 bg-gray-100 rounded mb-4">
                    {renderWidget(widget)}
                  </div>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DeviceDetail;
