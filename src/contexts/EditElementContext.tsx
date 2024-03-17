import { createContext, useState } from "react";
import { commonProviderChildren } from "./ElementContext";

interface IEditElementContext {
  editElement: IContextState;
  changeEditState: (edit: boolean, elementId: string) => void;
}

export const EditElementContext = createContext<
  IEditElementContext | undefined
>(undefined);

interface IContextState {
  edit: boolean;
  elementId: string | undefined;
}

export const useEditElementContext = () => {
  const [editElement, setEditElement] = useState<IContextState>({
    edit: false,
    elementId: undefined,
  });

  const changeEditState = (edit: boolean, elementId: string) => {
    setEditElement({ edit, elementId });
  };

  return { editElement, changeEditState };
};

export const EditElementContextProvider = ({
  children,
}: commonProviderChildren) => {
  const value = useEditElementContext();

  return (
    <EditElementContext.Provider value={value}>
      {children}
    </EditElementContext.Provider>
  );
};
