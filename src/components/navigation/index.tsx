import NavItem from 'components/nav-item';
import styled from 'styled-components';
import Icon from 'components/icon';

const Wrapper = styled.nav`
  display: flex;
`;

const StyledIcon = styled(Icon)`
  width: 12px;
  height: 12px;
  margin-left: 9px;
  color: #022b54;
`;

export default function Navigation() {
  return (
    <Wrapper>
      <NavItem active>Find Homes</NavItem>
      <NavItem>Partners</NavItem>
      <NavItem>Company Retreats</NavItem>
      <NavItem>
        <>
          More <StyledIcon name="more" />
        </>
      </NavItem>
    </Wrapper>
  );
}
