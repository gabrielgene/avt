export const initialRegion = { value: '', label: 'Any region', name: '' };
export const initialGuests = { value: '', label: '', name: '' };

export const ORDER_OPTIONS = [
  { value: 'RELEVANCE', label: 'Relevance (default', name: 'RELEVANCE' },
  { value: 'PRICE_ASC', label: 'Price: lowest first', name: 'PRICE_ASC' },
  { value: 'PRICE_DESC', label: 'Price: highest first', name: 'PRICE_DESC' },
];

export const GUEST_OPTIONS = [...Array(30).keys()].map((v: number) => ({
  value: `${v + 1}`,
  label: `${v + 1} guests`,
  name: `${v + 1}`,
}));
