import React, { FC, useContext } from "react";
import { observer } from "mobx-react";
import PointStore from "../../store/Point/PointStore";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DraggableInternal from "./DraggableInternal";

const List: FC<{}> = () => {
  const pointStore = useContext(PointStore);
  const { pointList, dragItem } = pointStore;

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }

    dragItem(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="pointList">
        {(provided) => (
          <DraggableInternal items={pointList} provided={provided} />
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default observer(List);
