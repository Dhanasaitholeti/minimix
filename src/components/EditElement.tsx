import { useContext, useState } from "react";
import { ElementContext } from "../contexts/ElementContext";
import { EditElementContext } from "../contexts/EditElementContext";
import { elementProps } from "../libs/types/element.type";
import {
  IflexStyles,
  IgridStyles,
  IimageStyles,
  IparaStyles,
} from "../libs/types/elementStyles.type";

const EditElement = () => {
  const [val, setVal] = useState("");
  const elements = useContext(ElementContext);
  const elementInEditState = useContext(EditElementContext);

  const editElementData = elementInEditState?.editElement;

  const handleOnClick = () => {
    const id = elementInEditState?.editElement.elementId;
    if (id) {
      elements?.changeContentOfElement(id, val);
    }
  };

  const presentEditingElement =
    editElementData?.elementId &&
    (elements?.getElement(editElementData.elementId) as elementProps);

  let styleKeys: (keyof (
    | IimageStyles
    | IparaStyles
    | IflexStyles
    | IgridStyles
  ))[] = [];

  if (presentEditingElement && presentEditingElement.styles)
    styleKeys = Object.keys(presentEditingElement?.styles) as (keyof (
      | IimageStyles
      | IparaStyles
      | IflexStyles
      | IgridStyles
    ))[];

  console.log(styleKeys);

  return (
    <>
      <div>
        <div className="flex flex-col items-start max-w-full w-full px-4 gap-2">
          <p className="text-lg">Content:</p>
          <input
            type="text"
            onChange={(e) => setVal(e.target.value)}
            className="bg-backgroundNavbar px-4 py-2 w-full"
            placeholder={
              presentEditingElement && presentEditingElement?.content
            }
          />
        </div>

        {styleKeys?.map((style) => (
          <div className="flex flex-col items-start max-w-full w-full px-4 gap-2">
            <p>{style}</p>
            <input
              type="text"
              onChange={(e) => setVal(e.target.value)}
              className="bg-backgroundNavbar px-4 py-2 w-full"
              placeholder={
                presentEditingElement &&
                presentEditingElement.styles &&
                (presentEditingElement?.styles[style] as string)
              }
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => handleOnClick()}
        className="text-center mx-auto px-4 py-2 text-white bg-CTAPrimary max-w-min mt-16"
      >
        save
      </button>
    </>
  );
};

export default EditElement;
