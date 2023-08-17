export type HouseEvent = {
  date: string;
  description:
    | "Sold"
    | "Listing Removed"
    | "Price Changed"
    | "Listed"
    | "Relisted"
    | "Contingent";
  price?: number;
};

export type Property = {
  apn: string;
  address: string;
  buying_brokers: string[];
  events: HouseEvent[];
  latitude: number;
  listing_brokers: (
    | "Keller Williams Realty Maui-Ki"
    | "C21Al Fine Homes & Estates (Ka)"
    | "Coldwell Banker Island Prop-KP"
    | "BHGRE Advantage Realty Valley Isle"
    | "Corcoran Pacific Properties - L"
    | "CXL-Coldwell Banker Island Prop(L)"
    | "Gregory Harbottle | Inc"
    | "Keller Williams Realty Maui-L"
    | "Keller Williams Realty Maui-Ka"
    | "Maui Real Estate Advisors LLC"
    | "Monte D Fitts REALTOR"
    | "Ridge Realty Rentals LLC"
    | "Island Sotheby's Int'l Rlty(L)"
    | "Hapuna Realty"
    | "Welcome Hawaii Properties"
    | "James M Harris | Inc"
    | "Berkshire Hathaway Maui Prop-L"
    | "Gregory Harbottle | Inc"
  )[];
  longitude: number;
};
