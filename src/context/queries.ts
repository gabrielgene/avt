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
  query getHomes($region: UUID, $page: Int) {
    homes(region: $region, page: $page, pageSize: 10) {
      count
      results {
        id
        title
      }
    }
  }
`;
