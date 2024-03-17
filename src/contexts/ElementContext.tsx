import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { v4 } from "uuid";

export interface commonProviderChildren {
  children: React.ReactNode;
}

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
  changeContentOfElement: (id: string, content: any) => void;
  removeELement: (id: string) => void;
  getElement: (id: string) => elementProps | undefined;
  repositionElement: (id: string, belowId: string) => void;
  addChildrenToElement: (parentId: string, newElement: elementProps) => void;
}

export const ElementContext = createContext<IElementContext | undefined>(
  undefined
);

export const useElementContext = () => {
  const [elements, setElements] = useState<elementProps[]>([]);

  console.log(elements);

  const addElement = (element: elementProps) => {
    element.id = v4();
    setElements((prev) => [...prev, element]);
  };

  const changeContentOfElement = (id: string, content: any) => {
    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (id === element.id) {
          return {
            ...element,
            content: content,
          };
        } else {
          return element;
        }
      });
    });
  };

  const removeELement = (id: string) => {
    const newElements = elements.filter((element) => {
      return element.id !== id;
    });
    setElements(newElements);
  };

  const repositionElement = (id: string, belowId: string) => {
    setElements((prevElements) => {
      const indexId = prevElements.findIndex((element) => element.id === id);
      const indexBelowId = prevElements.findIndex(
        (element) => element.id === belowId
      );

      if (indexId !== -1 && indexBelowId !== -1) {
        const elementToMove = prevElements[indexId];
        prevElements.splice(indexId, 1);
        prevElements.splice(indexBelowId, 0, elementToMove);
      }

      return [...prevElements];
    });
  };

  const addChildrenToElement = (parentId: string, newElement: elementProps) => {
    removeELement(newElement.id);

    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (parentId === element.id && element.isChildren) {
          return {
            ...element,
            children: [...(element.children || []), newElement],
          };
        } else {
          return element;
        }
      });
    });
  };

  const getElement = (
    id: string,
    elementsList: elementProps[] = elements
  ): elementProps | undefined => {
    for (let element of elementsList) {
      if (id === element.id) {
        return element; // Found the element with the given id
      }
      if (
        element.isChildren &&
        element.children &&
        element.children.length > 0
      ) {
        const foundInChildren = getElement(id, element.children);
        if (foundInChildren) {
          return foundInChildren; // Element found in children
        }
      }
    }
    return undefined; // Element not found
  };

  return {
    elements,
    addElement,
    changeContentOfElement,
    repositionElement,
    removeELement,
    getElement,
    addChildrenToElement,
  };
};

export const ElementContextProvider = ({
  children,
}: commonProviderChildren) => {
  const value = useElementContext();
  return (
    <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
  );
};
