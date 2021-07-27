import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REGIONS, GET_HOMES } from './queries';
import { RegionsData, Filter, HomesData, Home } from './types';

type StoreProviderState = {
  filters: Array<Filter>;
  setFilter: (filter: Filter) => void;
  loading: boolean;
  homes: Home[];
  count: number;
};

const initalFilter = { value: '', label: 'Any region' };
const initialValue = {
  filters: [initalFilter],
  setFilter: () => {},
  loading: true,
  homes: [],
  count: 0,
};

const StoreContext = React.createContext<StoreProviderState>(initialValue);

export function StoreProvider(props: React.PropsWithChildren<{}>) {
  const [filters, setFilters] = React.useState<Array<Filter>>(
    initialValue.filters
  );
  const [filter, setFilter] = React.useState<Filter>(initialValue.filters[0]);

  const regionsQueryResult = useQuery<RegionsData>(GET_REGIONS);
  const homesQueryResult = useQuery<HomesData>(GET_HOMES, {
    variables: { region: filter.value, page: 1 },
  });

  React.useEffect(() => {
    const { data: regionsData } = regionsQueryResult;
    if (regionsData) {
      setFilters([
        initalFilter,
        ...regionsData.regions.map((r) => ({
          value: r.id,
          label: `${r.name}, ${r.stateName}`,
        })),
      ]);
    }
  }, [regionsQueryResult]);

  return (
    <StoreContext.Provider
      value={{
        filters,
        setFilter,
        loading: homesQueryResult.loading,
        homes: homesQueryResult.data?.homes.results || [],
        count: homesQueryResult.data?.homes.count || 0,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return React.useContext(StoreContext);
}
