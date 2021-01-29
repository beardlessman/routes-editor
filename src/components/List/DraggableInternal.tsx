import * as React from "react";
import { Draggable, DroppableProvided } from "react-beautiful-dnd";
import { observer } from "mobx-react";
import { IPoint } from "../../store/Point/PointStore";

interface IProps {
  items: IPoint[];
  provided: DroppableProvided;
}

@observer
export default class DraggableInternal extends React.Component<IProps> {
  render() {
    const { provided, items } = this.props;
    return (
      <div ref={provided.innerRef} className="drop-point">
        {items.map(({ key, value }, index) => (
          <Draggable key={key} draggableId={key.toString()} index={index}>
            {(provided) => (
              <div>
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="item"
                >
                  {value}
                </div>
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    );
  }
}
