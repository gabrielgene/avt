import styled from 'styled-components';
import { Text14 } from 'components/typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

const Item = styled(Text14)<{ active?: boolean }>`
  cursor: pointer;
  &:hover {
    color: #53c3d0;
  }
  ${({ active }) => (!!active ? 'color:#53c3d0' : 'color: inherit')}
`;

const Bar = styled.div`
  position: absolute;
  margin-top: 27px;
  height: 1px;
  background-color: #53c3d0;
  width: 20px;
`;

type Props = {
  children: string;
  active?: boolean;
};

export default function NavItem({ children, active }: Props) {
  return (
    <Wrapper>
      <Item active={active}>{children}</Item>
      {active && <Bar />}
    </Wrapper>
  );
}
