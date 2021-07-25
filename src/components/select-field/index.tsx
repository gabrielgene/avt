import React from 'react';
import styled from 'styled-components';
import { Text11, Text14 } from 'components/typography';
import Icon from 'components/icon';
import useClickOutside from 'hooks/useClickOutside';

type Props = {
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  label: string;
  width: string;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border: 2px solid #d1eff2;
    border-radius: 3px;
  }
`;

const Label = styled(Text11)`
  margin: 8px 0 1px 15px;
`;

const Value = styled(Text14)`
  margin: 0 0 10px 15px;
  display: flex;
`;

const Menu = styled.div`
  position: absolute;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-top: 8px;
  border: 2px solid #d1eff2;
  padding: 4px 0;
  border-radius: 2px;
  max-height: 400px;
  overflow: scroll;
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 10px;
  margin-right: 15px;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;

export default function SelectField({
  options,
  defaultValue,
  label,
  width,
}: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  function handleClick(itemId: string) {
    setOpen(false);
    const [selectedValue] = options.filter((o) => o.value === itemId);
    setSelected(selectedValue);
  }

  return (
    <div style={{ width }} ref={ref}>
      <Wrapper onClick={() => setOpen(!open)}>
        <div>
          <Label>{label}</Label>
          <Value>
            {(selected && selected.label) || defaultValue || (
              <span style={{ opacity: 0.3 }}>Select...</span>
            )}
          </Value>
        </div>
        <StyledIcon name={open ? 'chevronUp' : 'chevronDown'} />
      </Wrapper>
      {open && (
        <Menu
          style={{ width: (ref.current && ref.current.clientWidth) || 200 }}
        >
          {options.map((o) => (
            <MenuItem key={o.value} onClick={() => handleClick(o.value)}>
              <Text14>{o.label}</Text14>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}
