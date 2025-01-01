import {
  CheckboxContainer,
  CheckBoxElement,
  Label,
  ErrorMessage,
} from './styles';
import { CheckBoxProps } from './types';

function Checkbox({name, id, value, onChange, label,error}:CheckBoxProps) {
  return (
    <CheckboxContainer>
      <CheckBoxElement
        id={id}
        name={name}
        value={String(value)}
        type='checkbox'
        onChange={onChange}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
      <ErrorMessage>{error}</ErrorMessage>
    </CheckboxContainer>
  );
}

export default Checkbox;
