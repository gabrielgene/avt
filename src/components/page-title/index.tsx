import styled from 'styled-components';
import { Text28 } from 'components/typography';

type Props = {
  count: number;
  loading: boolean;
};

const Wrapper = styled.div`
  margin-bottom: 30px;
  align-self: flex-start;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #53c3d0;
  text-transform: uppercase;
  margin-right: 7px;
`;

const Line = styled.div`
  width: 68px;
  height: 1px;
  background-color: #53c3d0;
`;

const Info = styled.div`
  display: flex;
`;

const Count = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #022b54;
  margin-right: 6px;
`;

export default function PageTitle({ count, loading }: Props) {
  if (!loading && count === 0) return <div />;
  return (
    <Wrapper>
      <Header>
        <Title>{loading ? 'please wait' : 'you stay in one of'}</Title>
        <Line />
      </Header>
      <Info>
        <Count>{loading ? 'Loading' : count}</Count>
        <Text28>homes</Text28>
      </Info>
    </Wrapper>
  );
}
