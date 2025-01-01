import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface IUserDataContext {
  data: {
    name: string;
    surname: string;
    age: string | number;
    position: string;
  };
  onSubmitChange: Dispatch<SetStateAction<UserData>>;
}

export interface UserData {
  name: string;
  surname: string;
  age: string | number;
  position: string;
}



