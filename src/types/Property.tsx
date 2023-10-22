export type HouseEvent = {
  date: string;
  description: string;
  price?: number;
};

export type Property = {
  apn: string;
  address: string;
  buying_brokers: string[];
  events: HouseEvent[];
  latitude: number;
  listing_brokers: string[];
  longitude: number;
};
