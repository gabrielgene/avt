export type Filter = {
  value: string;
  label: string;
  name: string;
};

export type Region = {
  id: string;
  name: string;
  stateName: string;
};

export type RegionsData = {
  regions: Array<Region>;
};

export type Period = {
  checkIn: string;
  checkOut: string;
};

type Price = {
  minPrice: number;
  maxPrice: number;
};

export type SeasonPricing = {
  lowSeason: Price;
  highSeason: Price;
};

export type Home = {
  id: string;
  regionName: string;
  stateName: string;
  stateCode: string;
  bedsCount: number;
  hasPool?: boolean;
  maxOccupancy: number;
  bathroomsCount: number;
  photos: Array<{ url: string }>;
  title: string;
  seasonPricing: SeasonPricing;
};

export type HomeResult = {
  count: number;
  results: Array<Home>;
};

export type HomesData = {
  homes: HomeResult;
};
