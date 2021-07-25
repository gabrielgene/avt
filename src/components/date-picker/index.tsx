import React from 'react';
import { addDays } from 'date-fns';
import styled from 'styled-components';
import { Text11, Text14 } from 'components/typography';
import Icon from 'components/icon';
import useClickOutside from 'hooks/useClickOutside';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type Props = {
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
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 10px;
  margin-right: 15px;
`;

export default function BasicDateRangePicker({ width }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const ref = React.useRef<HTMLDivElement>(null);

  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  useClickOutside(ref, () => setOpen(false));

  function handleChange(item: any) {
    const { startDate, endDate } = item.selection;
    const [start] = startDate.toISOString().split('T');
    const [end] = endDate.toISOString().split('T');
    setValue(`${start} - ${end}`);
    setState([item.selection]);
  }

  return (
    <div style={{ width }} ref={ref}>
      <Wrapper onClick={() => setOpen(!open)}>
        <div>
          <Label>When</Label>
          <Value>
            {value || <span style={{ opacity: 0.3 }}>Select...</span>}
          </Value>
        </div>
        <StyledIcon name={open ? 'chevronUp' : 'chevronDown'} />
      </Wrapper>
      {open && (
        <Menu>
          <DateRange
            rangeColors={['#53c3d0', '#A3DFE6']}
            ranges={state}
            onChange={handleChange}
          />
        </Menu>
      )}
    </div>
  );
}
