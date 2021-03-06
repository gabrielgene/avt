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
  @media (max-width: 900px) {
    padding: 14px 30px;
  }
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
  max-width: 989px;
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

export const SignIn = styled(Button)`
  font-size: 13px;
  line-height: 18px;
  margin-right: 20px;
  &:hover {
    color: #53c3d0;
  }
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
            {/* for empty functions log something like 'not implemented'? */}
            <SignIn text="Sign In" type="outlined" onClick={() => {}} />

            <Button text="Sign Up" type="contained" onClick={() => {}} />
          </ActionWrapper>
        </TopWrapper>
        <BottomWrapper>
          <FilterGroup>
            <SelectField
              data-testid="selectRegion"
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
              width="15%"
              label="Who"
            />
            <Divider />
            <SelectField
              onChange={setOrder}
              options={ORDER_OPTIONS}
              value={order}
              width="25%"
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
