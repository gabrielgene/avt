import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_REGIONS, GET_HOMES } from './queries';
import { RegionsData, Filter, HomesData, Home, Period } from './types';
import { initialRegion, initialGuests, ORDER_OPTIONS } from './constants';

type StoreProviderState = {
  regions: Array<Filter>;
  currentRegion: Filter;
  setRegion: (filter: Filter) => void;

  period: Period | null;
  setPeriod: (period: Period) => void;

  guests: Filter;
  setGuests: (guest: Filter) => void;

  order: Filter;
  setOrder: (order: Filter) => void;

  loading: boolean;
  homes: Array<Home>;
  count: number;
};

const initialValue = {
  regions: [initialRegion],
  currentRegion: initialRegion,
  setRegion: () => {},

  period: null,
  setPeriod: () => {},

  guests: initialGuests,
  setGuests: () => {},

  order: ORDER_OPTIONS[0],
  setOrder: () => {},

  loading: true,
  homes: [],
  count: 0,
};

const StoreContext = React.createContext<StoreProviderState>(initialValue);

export function StoreProvider(props: React.PropsWithChildren<{}>) {
  const history = useHistory();
  const regionParam = history.location.pathname.split('/')[2];
  const queryParams = new URLSearchParams(history.location.search);
  const checkIn = queryParams.get('checkIn');
  const checkOut = queryParams.get('checkOut');

  const [regions, setRegions] = React.useState<Array<Filter>>(
    initialValue.regions
  );
  const [currentRegion, setCurrentRegion] =
    React.useState<Filter>(initialRegion);
  const changeRegion = (region: Filter) => {
    history.push({
      pathname: `/regions/${region.name}`,
      search: history.location.search,
    });
    setCurrentRegion(region);
  };
  const regionsQueryResult = useQuery<RegionsData>(GET_REGIONS);
  React.useEffect(() => {
    const { data: regionsData } = regionsQueryResult;
    if (regionsData) {
      const selectedRegion = regionsData.regions.find(
        (r) => r.name === regionParam
      );

      if (selectedRegion)
        setCurrentRegion({
          value: selectedRegion.id,
          label: `${selectedRegion.name}, ${selectedRegion.stateName}`,
          name: selectedRegion.name,
        });

      setRegions([
        initialRegion,
        ...regionsData.regions.map((r) => ({
          value: r.id,
          label: `${r.name}, ${r.stateName}`,
          name: r.name,
        })),
      ]);
    }
  }, [regionsQueryResult, regionParam]);

  const [period, setPeriod] = React.useState<Period | null>(null);
  const handlePeriod = (period: Period) => {
    const params = new URLSearchParams(queryParams);

    params.set('checkIn', period.checkIn);
    params.set('checkOut', period.checkOut);

    history.push({ search: params.toString() });
    setPeriod(period);
  };
  React.useEffect(() => {
    if (checkIn && checkOut) {
      setPeriod({ checkIn, checkOut });
    }
  }, [checkIn, checkOut]);

  const guestsParam = queryParams.get('guests');
  const [guests, setGuests] = React.useState<Filter>(initialGuests);
  const changeGuests = (selectedGuests: Filter) => {
    const params = new URLSearchParams(queryParams);
    params.set('guests', selectedGuests.value);
    history.push({ search: params.toString() });
    setGuests(selectedGuests);
  };
  React.useEffect(() => {
    if (guestsParam) {
      setGuests({
        value: guestsParam,
        label: `${guestsParam} guests`,
        name: guestsParam,
      });
    }
  }, [guestsParam]);

  const orderParam = queryParams.get('order');
  const [order, setOrder] = React.useState<Filter>(ORDER_OPTIONS[0]);
  const changeOrder = (selectedOrder: Filter) => {
    const params = new URLSearchParams(queryParams);
    params.set('order', selectedOrder.value);
    history.push({ search: params.toString() });
    setOrder(selectedOrder);
  };
  React.useEffect(() => {
    if (orderParam) {
      const currentOrder = ORDER_OPTIONS.find((o) => o.value === orderParam);
      if (currentOrder) setOrder(currentOrder);
    }
  }, [orderParam]);

  const homesQueryResult = useQuery<HomesData>(GET_HOMES, {
    variables: {
      region: currentRegion.value,
      page: 1,
      period,
      guests: parseInt(guests.value, 10),
      order: order.value,
    },
  });

  return (
    <StoreContext.Provider
      value={{
        regions,
        currentRegion: currentRegion,
        setRegion: changeRegion,

        period,
        setPeriod: handlePeriod,
        guests,
        setGuests: changeGuests,

        order,
        setOrder: changeOrder,

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
