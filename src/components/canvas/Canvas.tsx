import { useContext } from "react";
import CreateComponent from "./CreateComponent";
import { ElementContext } from "../../contexts/ElementContext";
import { elementProps } from "../../libs/types/element.type";
import { movementType } from "../../hooks/useDragStart.hook";

interface IElementData {
  type: movementType;
  data: elementProps;
}

const Canvas: React.FC = () => {
  const data = useContext(ElementContext);

  const handleOnDrop = (e: React.DragEvent) => {
    const elementdata: IElementData = JSON.parse(
      e.dataTransfer.getData("elementData")
    );
    if (elementdata.type == "insert") {
      data?.addElement(elementdata.data);
    } else {
      data?.repositionElement(
        elementdata.data.id,
        (e.target as HTMLElement).id
      );
    }
  };

  const allowDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        onDrop={(e) => handleOnDrop(e)}
        onDragOver={(e) => allowDrag(e)}
        className="h-[100%] "
      >
        {data?.elements?.map((element: elementProps) => (
          <CreateComponent {...element} key={element.id} />
        ))}
      </div>
    </>
  );
};

export default Canvas;
