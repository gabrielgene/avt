import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStore } from 'context/store';
import { gql, useQuery } from '@apollo/client';
import { Text12, Text20 } from 'components/typography';

type Props = {
  homeId: string;
};

type HomePricing = {
  numberOfNights: number;
  total: number;
};

type HomesPricingData = {
  homesPricing: Array<HomePricing>;
};

const GET_PRICING = gql`
  query getHomePricing($id: UUID, $period: BookingPeriod!) {
    homesPricing(ids: [$id], period: $period) {
      numberOfNights
      total
    }
  }
`;

const Text = styled(Text12)`
  line-height: 17px;
  color: #022b54;
  opacity: 0.3;
  margin-bottom: 4px;
`;

function Loading() {
  return (
    <div>
      <Skeleton
        style={{ marginBottom: 4 }}
        variant="rect"
        width={74}
        height={17}
      />
      <Skeleton
        style={{ marginBottom: 4 }}
        variant="rect"
        width={98}
        height={22}
      />
      <Skeleton variant="rect" width={45} height={17} />
    </div>
  );
}

function formatNumber(number: number) {
  return number.toLocaleString('en-us', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function TotalPrice({ homeId }: Props) {
  const { period } = useStore();
  const { loading, data } = useQuery<HomesPricingData>(GET_PRICING, {
    variables: { id: homeId, period },
  });

  if (loading || !data) {
    return <Loading />;
  }

  const {
    homesPricing: [pricing],
  } = data;

  return (
    <div>
      <Text>Total • {pricing.numberOfNights} nights</Text>
      <Text20>${formatNumber(pricing.total)}</Text20>
      <Text>
        ${formatNumber(pricing.total / pricing.numberOfNights)} per night
      </Text>
    </div>
  );
}
