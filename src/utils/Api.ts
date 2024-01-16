import { useEffect, useState } from 'react'

//define Chef interface.
// NOTE: Able to separate this interface into its own file (Chef.interface.tsx) => import to useChefsData.tsx (define custom hook for fetch) => import useChef to ChefsDatabase.tsx
export interface Chef {
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

const useChef = () => {
  const [chefs, setChefs] = useState<Chef[]>([])

  //fetch chef data on mount of ChefsDatabase component
  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/771aa3b6-1197-48c5-bb59-0eefed4a584c'
        )
        const data = await response.json()
        setChefs(data.chefs)
        // console.log(chefs)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchChefs()
  }, [])
  return chefs
}

export default useChef
