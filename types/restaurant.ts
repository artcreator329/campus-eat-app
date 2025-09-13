export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  distance: number;
  priceLevel: number; // 1-4 ($-$$$$)
  rating: number; // 1-5
  address: string;
  imageUrl: string;
}

export type SortOption = 'price' | 'rating';