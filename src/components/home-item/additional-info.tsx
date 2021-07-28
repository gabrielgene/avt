import styled from 'styled-components';
import { Text12 } from 'components/typography';
import Icon from 'components/icon';

type Props = {
  bedsCount: number;
  hasPool?: boolean;
  maxOccupancy: number;
  bathroomsCount: number;
};

const Wrapper = styled.div`
  display: flex;
  opacity: 0.3;
  height: 24px;
  align-items: center;
  margin-bottom: 35px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 16px;
  }
`;

const Item = styled(Text12)`
  color: #022b54;
`;

const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export default function AdditionalInfo({
  bedsCount,
  hasPool,
  bathroomsCount,
  maxOccupancy,
}: Props) {
  return (
    <Wrapper>
      <Content>
        <StyledIcon name="rooms" />
        <Item>{bedsCount} Bedrooms</Item>
      </Content>
      <Content>
        <StyledIcon name="bath" />
        <Item>{bathroomsCount} Bathrooms</Item>
      </Content>
      {hasPool && (
        <Content>
          <StyledIcon name="pool" />
          <Item>Pool</Item>
        </Content>
      )}
      <Content>
        <StyledIcon name="user" />
        <Item>{maxOccupancy} Guests</Item>
      </Content>
    </Wrapper>
  );
}
