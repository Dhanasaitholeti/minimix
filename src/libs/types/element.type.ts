import {
  IimageStyles,
  IparaStyles,
  IflexStyles,
  IgridStyles,
} from "./elementStyles.type";

export interface elementProps {
  elementName: string;
  elementType: "singleTag" | "multiTag";
  id: string;
  element: string;
  content?: string;
  isChildren: boolean;
  children?: elementProps[];
  styles?: IimageStyles | IparaStyles | IflexStyles | IgridStyles;
}
