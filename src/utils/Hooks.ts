//START FILTER LOGIC
//set the state of the data filtered to map to display the relavent ChefCards according to filter params
import { useState, useEffect } from 'react'
import { ChefDataProps } from '../components/ChefCards/types'

export const modalFilterFxn = (
  filterParams: string[],
  chefData: ChefDataProps[]
)  => : ChefDataProps[]{
  const [filteredData, setFilteredData] = useState(chefData)
  
}

//END FILTER LOGIC
