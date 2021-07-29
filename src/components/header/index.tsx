import styled from 'styled-components';
import Logo from 'components/logo';
import Navigation from 'components/navigation';
import Button from 'components/button';
import SelectField from 'components/select-field';
import DatePicker from 'components/date-picker';
import TextField from 'components/text-field';
import { useStore } from 'context/store';
import { ORDER_OPTIONS, GUEST_OPTIONS } from 'context/constants';

export const Wrapper = styled.div`
  padding: 14px 80px;
  background: #ffffff;
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
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

export default function Header() {
  const {
    regions,
    setRegion,
    currentRegion,

    period,
    setPeriod,

    guests,
    setGuests,

    order,
    setOrder,

    coupon,
    setCoupon,
  } = useStore();

  return (
    <>
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
              options={regions}
              onChange={setRegion}
              value={currentRegion}
              defaultValue="Any region"
              width="30%"
              label="Where"
            />
            <Divider />
            <DatePicker width="30%" period={period} onChange={setPeriod} />
            <Divider />
            <SelectField
              onChange={setGuests}
              options={GUEST_OPTIONS}
              value={guests}
              width="20%"
              label="Who"
            />
            <Divider />
            <SelectField
              onChange={setOrder}
              options={ORDER_OPTIONS}
              value={order}
              width="20%"
              label="Order"
            />
          </FilterGroup>
          <TextField
            label="Coupon"
            placeholder="Got a code?"
            value={coupon}
            onChange={setCoupon}
          />
        </BottomWrapper>
      </Wrapper>
      <div style={{ height: 160 }} />
    </>
  );
}
