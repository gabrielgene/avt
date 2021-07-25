import NavItem from 'components/nav-item';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
`;

export default function Navigation() {
  return (
    <Wrapper>
      <NavItem active>Find Homes</NavItem>
      <NavItem>Partnes</NavItem>
      <NavItem>Company Retreats</NavItem>
      <NavItem>More</NavItem>
    </Wrapper>
  );
}
