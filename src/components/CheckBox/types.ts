import { ChangeEvent } from "react";

export interface CheckBoxProps{
  name:string,
  id?:string,
  label?:string,
  value?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  error?: string
}
