import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Widgets from './Widgets'; // Import the Widgets component

const WidgetsList = [
  { id: '1', content: 'Alarm and Sound' },
  { id: '2', content: 'Chart' },
  { id: '3', content: 'Map' },
  { id: '4', content: 'Gauge' }
];

const DeviceDetail = () => {
  const [dashboardWidgets, setDashboardWidgets] = React.useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Check if there's a destination
    if (!destination) return;

    // Dragging from widget box to dashboard
    if (source.droppableId === 'widgetBox' && destination.droppableId === 'dashboard') {
      const newWidget = WidgetsList[source.index]; // Get the widget being dragged

      // Check if widget is already in the dashboard to avoid duplicates
      if (!dashboardWidgets.find(widget => widget.id === newWidget.id)) {
        setDashboardWidgets((prev) => [...prev, newWidget]);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Left Side Widget Box */}
        <Droppable droppableId="widgetBox">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-1/4 p-4 bg-gray-200"
            >
              <h2 className="font-bold mb-4">Widget Box</h2>
              <Widgets />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Right Side Dashboard */}
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
                dashboardWidgets.map((widget, index) => (
                  <div key={widget.id} className="p-4 bg-gray-100 rounded mb-4">
                    {widget.content}
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
