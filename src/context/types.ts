export type Filter = {
  value: string;
  label: string;
};

export type Regions = {
  id: string;
  name: string;
  stateName: string;
};

export type RegionsData = {
  regions: Regions[];
};

export type Home = {
  id: string;
  title: string;
};

export type HomeResult = {
  count: number;
  results: Array<Home>;
};

export type HomesData = {
  homes: HomeResult;
};
