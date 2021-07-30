import React from 'react';
import styled from 'styled-components';
import { Text11, Text14 } from 'components/typography';
import Icon from 'components/icon';
import useClickOutside from 'hooks/useClickOutside';
import { Filter } from 'context/types';

type Props = {
  options: Array<Filter>;
  defaultValue?: string;
  value: Filter;
  onChange: (filter: Filter) => void;
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
  z-index: 2;
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
  value,
  width,
  onChange,
}: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Filter>(value);
  const ref = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  React.useEffect(() => setSelected(value), [value]);

  function handleClick(option: Filter) {
    setOpen(false);
    onChange(option);
  }

  return (
    <div style={{ width }} ref={ref} data-cy={label}>
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
            <MenuItem key={o.value} onClick={() => handleClick(o)}>
              <Text14>{o.label}</Text14>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}
