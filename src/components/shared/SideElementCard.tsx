import { useDragHandler } from "../../hooks/useDragStart.hook";
import { sideElementProps } from "../Elements/ElementsData";

interface SideElementCardProps {
  elementName: string;
  componentData: sideElementProps;
}

const SideElementCard: React.FC<SideElementCardProps> = ({
  elementName,
  componentData,
}) => {
  const handleOnDragStart = useDragHandler(componentData);

  return (
    <>
      <div className="flex gap-10 items-center py-2 px-4 mx-4 my-2">
        <componentData.logo size={24} />
        <p
          draggable="true"
          onDragStart={(e) => handleOnDragStart(e)}
          className="text-lg hover:cursor-pointer"
        >
          {elementName}
        </p>
      </div>
    </>
  );
};

export default SideElementCard;
