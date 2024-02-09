export interface ChefDataProps {
  user_id: string;
  name?: string;
  "featured-images"?: string[];
  labels?: string[];
  services?: string[];
  description?: string;
  corporate?: boolean;
  private?: string[];
  distance_from_centre?: string;
  rating?: {
    value: number;
    number_of_ratings: number;
  };
  cuisines?: string[];
  location?: string;
  coordinates: { latitude: number; longitude: number };
  isActive?: boolean;
  onCardClick?: (index: number) => void | undefined;
  activeCard: number;
}
