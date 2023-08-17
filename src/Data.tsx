export type HouseEvent = {
  date: string;
  description: 'Sold' | 'Listing Removed' | 'Price Changed' | 'Listed' | 'Relisted' | 'Contingent';
  price?: number;
};

export type Data = {
  apn: string;
  address: string;
  buying_brokers: string[];
  events: HouseEvent[];
  latitude: number;
  listing_brokers: string[];
  longitude: number;
};