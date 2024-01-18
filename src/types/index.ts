export type ChefData = {
  name?: string
  labels?: string[]
  services?: string[]
  corporate?: boolean
  private?: string[]
  distance_from_centre?: string
  rating?: {
    value: number
    number_of_ratings: number
  }
  cuisines?: string[]
  location?: string
}