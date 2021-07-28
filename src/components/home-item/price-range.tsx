import styled from 'styled-components';
import { Text12, Text20 } from 'components/typography';
import { SeasonPricing } from 'context/types';
import Icon from 'components/icon';

type Props = {
  seasonPricing: SeasonPricing;
};

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  :not(:last-child) {
    margin-right: 74px;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;

const Text = styled(Text12)`
  line-height: 17px;
  color: #022b54;
  opacity: 0.3;
`;

const StyledIcon = styled(Icon)`
  opacity: 0.3;
  width: 16px;
  height: 16px;
`;

export default function PriceRange({ seasonPricing }: Props) {
  const { lowSeason, highSeason } = seasonPricing;

  function parseNumber(number: number) {
    return number.toLocaleString('en-us');
  }

  return (
    <Wrapper>
      <Content>
        <Title>
          <StyledIcon name="low" />
          <Text>Budget Season</Text>
        </Title>
        <Text20>
          ${parseNumber(lowSeason.minPrice)} - $
          {parseNumber(lowSeason.maxPrice)}
        </Text20>
        <Text>per night</Text>
      </Content>
      <Content>
        <Title>
          <StyledIcon name="high" />
          <Text>Prime Season</Text>
        </Title>
        <Text20>
          ${parseNumber(highSeason.minPrice)} - $
          {parseNumber(highSeason.maxPrice)}
        </Text20>
        <Text>per night</Text>
      </Content>
    </Wrapper>
  );
}
