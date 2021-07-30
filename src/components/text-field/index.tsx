import styled from 'styled-components';
import { Text11 } from 'components/typography';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #e8eff5;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 111px;
  }

  &:hover {
    border: 2px solid #d1eff2;
    border-radius: 3px;
  }
`;

const Label = styled(Text11)`
  margin: 8px 0 1px 15px;
`;

const Input = styled.input`
  border: none;
  appearance: auto;
  outline: none;
  margin: 0 0 10px 15px;
  display: flex;
  font-size: 13px;
  line-height: 142%;
  color: #022b54;

  ::placeholder {
    opacity: 0.3;
  }
`;

export default function TextField({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        data-cy="Input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
}
