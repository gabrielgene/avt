import styled from 'styled-components';
import Logo from 'components/logo';
import Navigation from 'components/navigation';
import Button from 'components/button';

export const Wrapper = styled.div`
  padding: 14px 80px;
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
      <Logo />
      <Navigation />
      <ActionWrapper>
        <SignUp text="Sign In" type="outlined" onClick={() => {}} />

        <Button text="Sign Up" type="contained" onClick={() => {}} />
      </ActionWrapper>
    </Wrapper>
  );
}
