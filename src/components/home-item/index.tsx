import styled from 'styled-components';
import { useStore } from 'context/store';
import { Home } from 'context/types';
import { Text12, Text19 } from 'components/typography';
import If from 'components/if-statement';
import AdditionalInfo from './additional-info';
import PriceRange from './price-range';
import TotalPrice from './total-price';

type Props = {
  home: Home;
};

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #f4f7fa;
`;

export const Content = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 390px;
  height: 208px;
  border-radius: 2px;
`;

export const Info = styled.div`
  margin-left: 30px;
`;

const Region = styled(Text12)`
  margin-top: 15px;
  margin-bottom: 8px;
`;

const Title = styled(Text19)`
  font-family: 'SangBleu Sunrise';
  font-weight: 700;
  margin-bottom: 12px;
`;

export default function HomeItem({ home }: Props) {
  const { period } = useStore();
  const {
    id,
    title,
    regionName,
    stateName,
    stateCode,
    photos: [photo],
  } = home;

  return (
    <Wrapper data-cy="HomeItem">
      <Content>
        <Image src={`${photo.url}?height=208&width=390`} alt="Home image" />
        <Info>
          <Region>
            {regionName} • {stateName}, {stateCode}
          </Region>
          <Title>{title}</Title>
          <AdditionalInfo
            bedsCount={home.bedsCount}
            hasPool={home.hasPool}
            bathroomsCount={home.bathroomsCount}
            maxOccupancy={home.maxOccupancy}
          />
          <If condition={!period}>
            <PriceRange seasonPricing={home.seasonPricing} />
          </If>
          <If condition={!!period}>
            <TotalPrice homeId={id} />
          </If>
        </Info>
      </Content>
      <Divider />
    </Wrapper>
  );
}
