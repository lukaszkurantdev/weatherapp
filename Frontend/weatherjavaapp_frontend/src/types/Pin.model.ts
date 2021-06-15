export interface PinDetails {
  id: number;
  user: string;
  title: string;
  description: string;
  image?: string;
  latitude: number;
  longitude: number;
  date: string;
  reviewsNumber: number;
}
export interface Pin {
  pin: PinDetails;
  createdByUser: boolean;
  reviewedByUser: boolean;
}