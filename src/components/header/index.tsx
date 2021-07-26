import styled from 'styled-components';
import Logo from 'components/logo';
import Navigation from 'components/navigation';
import Button from 'components/button';
import SelectField from 'components/select-field';
import DatePicker from 'components/date-picker';
import TextField from 'components/text-field';

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

const data = [
  {
    id: '0bb20925-51bc-11ea-adb3-c5da55d0cc57',
    name: 'Nashville',
    stateName: 'Tennessee',
    stateCode: 'TN',
  },
  {
    id: '24c6f668-fa74-11e9-aa26-3fdfc21757cb',
    name: 'Sonoma',
    stateName: 'California',
    stateCode: 'CA',
  },
  {
    id: '42b72ed3-4f50-11e9-afc4-934d893b8b54',
    name: 'Malibu',
    stateName: 'California',
    stateCode: 'CA',
  },
  {
    id: '42b755e6-4f50-11e9-afc4-cfeda9af0fec',
    name: 'Coachella Valley',
    stateName: 'California',
    stateCode: 'CA',
  },
  {
    id: '42b77cf7-4f50-11e9-afc4-734d78a6978a',
    name: 'Paso Robles',
    stateName: 'California',
    stateCode: 'CA',
  },
];

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
            options={[{ value: '', label: 'Loading...' }]}
            // options={data.map((d) => ({
            //   value: d.id,
            //   label: `${d.name}, ${d.stateName}`,
            // }))}
            defaultValue="Any region"
            width="30%"
            label="Where"
          />
          <Divider />
          <DatePicker width="30%" />
          <Divider />
          <SelectField options={guestAmountOptions} width="20%" label="Who" />
          <Divider />
          <SelectField options={orderOptions} width="20%" label="Order" />
        </FilterGroup>
        <TextField label="Coupom" placeholder="Got a code?" />
      </BottomWrapper>
    </Wrapper>
  );
}
