import styled from 'styled-components';
import Logo from 'components/logo';
import Navigation from 'components/navigation';
import Button from 'components/button';

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

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  display: flex;
`;

export const SignUp = styled(Button)`
  margin-right: 20px;
`;

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
        <div>Filter</div>
        <div>Filter</div>
        <div>Filter</div>
        <div>Filter</div>
      </BottomWrapper>
    </Wrapper>
  );
}
