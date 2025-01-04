type ButtonType = 'submit'| 'button' | 'reset'

export interface ButtonProps{
  name:string;
  type?:ButtonType;
  onClick?: () => void;
  buttonWidth?: string;
  disabled?:boolean;
  deleteButton?:boolean;
}



