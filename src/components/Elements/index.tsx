import SideElementCard from "../common/SideElementCard";
import ElementsData from "./ElementsData";

export const Elements = ElementsData.map((element) => (
  <SideElementCard
    key={element.id}
    elementName={element.elementName}
    componentData={element}
  />
));
