export type HouseEvent = {
  date: string;
  description: string;
  price?: number;
};

export type Data = {
  address: string;
  buying_brokers: string[];
  events: HouseEvent[];
  latitude: number;
  listing_brokers: string[];
  longitude: number;
};