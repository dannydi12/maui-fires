import { Property } from "../Property";

export const listOfBrokers = (properties: Property[]) => {
  const keys = {} as any;
  const brokers = [] as string[];

  properties.forEach((prop) => {
    prop.listing_brokers.forEach((b) => brokers.push(b));
  });

  brokers.forEach((b) => {
    keys[b] = (keys[b] || 0) + 1;
  });

  return Object.keys(keys);
};
