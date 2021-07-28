import { gql } from '@apollo/client';

export const GET_REGIONS = gql`
  query getRegions {
    regions {
      id
      name
      stateName
    }
  }
`;

export const GET_HOMES = gql`
  query getHomes(
    $region: UUID
    $page: Int
    $period: BookingPeriod
    $guests: Int
    $order: HomesOrder
  ) {
    homes(
      region: $region
      page: $page
      pageSize: 10
      period: $period
      guests: $guests
      order: $order
    ) {
      count
      results {
        id
        title
        regionName
        stateName
        stateCode
        bedsCount
        hasPool
        bathroomsCount
        maxOccupancy
        seasonPricing {
          lowSeason {
            minPrice
            maxPrice
          }
          highSeason {
            minPrice
            maxPrice
          }
        }
        photos {
          url
        }
      }
    }
  }
`;
