import { HTMLInputTypeAttribute } from 'react';

export type InputProps = {
  position?: string;
  small?: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};
