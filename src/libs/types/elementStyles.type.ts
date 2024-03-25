import {
  BorderColorValues,
  BorderRadiusValues,
  BorderValues,
  BorderWidthValues,
  FontSizeValues,
  FontStyleValues,
  FontWeightValues,
  TextColorValues,
  TextPositionValues,
} from "../enums/text.enum";

export interface IparaStyles {
  fontSize: FontSizeValues | string;
  fontWeight: FontWeightValues | string;
  fontStyle: FontStyleValues | string;
  textPosition: TextPositionValues | string;
  textColor: TextColorValues | string;
  border: BorderValues | string;
  borderColor: BorderColorValues | string;
  borderWidth: BorderWidthValues | string;
  borderRadius: BorderRadiusValues | string;
}

export interface IimageStyles {
  height: string;
  width: string;
  padding: string;
  bg: string;
}

export interface IflexStyles {
  height: string;
  width: string;
  padding: string;
  bg: string;
}

export interface IgridStyles {
  height: string;
  width: string;
  padding: string;
  bg: string;
}
