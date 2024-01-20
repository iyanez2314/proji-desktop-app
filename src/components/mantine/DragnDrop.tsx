import cx from "clsx";
import { Icon } from "@iconify/react";
import { Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import classes from "./DragnDrop.module.css";

// Shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DragnDropProps {
  groupName?: string;
}

const data = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export function DragnDrop({ groupName }: DragnDropProps) {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          // className={cx(classes.item, {
          //   [classes.itemDragging]: snapshot.isDragging,
          // })}
          className="bg-white p-4 rounded-md shadow-md flex items-center space-x-4 w-full h-[40px]"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>
            <Icon icon="lucide:more-vertical" />
          </Text>
          <div>
            <Text>{item.name}</Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={groupName || ""}>
          <AccordionTrigger className="text-white">
            {groupName}
          </AccordionTrigger>
          <AccordionContent>
            <div className="hover:cursor-pointer text-white flex items-center gap-2 p-2">
              <Icon icon="lucide:plus" />
              <p>Add New Project</p>
            </div>
            <Droppable droppableId="dnd-list" direction="vertical">
              {(provided) => (
                <div
                  className="space-y-2"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DragDropContext>
  );
}
