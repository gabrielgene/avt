import styled from 'styled-components';
import Logo from 'components/logo';
import Navigation from 'components/navigation';
import Button from 'components/button';
import SelectField from 'components/select-field';
import DatePicker from 'components/date-picker';
import TextField from 'components/text-field';
import { useStore } from 'context/store';

export const Wrapper = styled.div`
  padding: 14px 80px;
  background: #ffffff;
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const FilterGroup = styled.div`
  width: 100%;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  display: flex;
`;

export const SignUp = styled(Button)`
  margin-right: 20px;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background: #e8eff5;
  align-self: center;
`;

const orderOptions = [
  { value: 'DEFAULT', label: 'Relevance (default' },
  { value: 'LOW', label: 'Price: lowest first' },
  { value: 'HIGH', label: 'Price: highest first' },
];

const guestAmountOptions = [...Array(30).keys()].map((v: number) => ({
  value: `${v + 1}`,
  label: `${v + 1} guests`,
}));

export default function Header() {
  const { filters, setFilter } = useStore();

  return (
    <Wrapper>
      <TopWrapper>
        <Logo />
        <Navigation />
        <ActionWrapper>
          <SignUp text="Sign In" type="outlined" onClick={() => {}} />

          <Button text="Sign Up" type="contained" onClick={() => {}} />
        </ActionWrapper>
      </TopWrapper>
      <BottomWrapper>
        <FilterGroup>
          <SelectField
            options={filters}
            onChange={setFilter}
            defaultValue="Any region"
            width="30%"
            label="Where"
          />
          <Divider />
          <DatePicker width="30%" />
          <Divider />
          <SelectField
            onChange={() => {}}
            options={guestAmountOptions}
            width="20%"
            label="Who"
          />
          <Divider />
          <SelectField
            onChange={() => {}}
            options={orderOptions}
            width="20%"
            label="Order"
          />
        </FilterGroup>
        <TextField label="Coupom" placeholder="Got a code?" />
      </BottomWrapper>
    </Wrapper>
  );
}
