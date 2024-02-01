// Reducer
import { createSlice } from '@reduxjs/toolkit'

export interface FilteringState {
  filters: {
    discounts: string[]
    tags: string[]
    rating: string
    cuisines: string[]
  }
}

const initialState: FilteringState = {
  filters: {
    discounts: [],
    tags: [],
    rating: 'All',
    cuisines: [],
  },
}

const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    setFilters(state, action) {
      // Update the filtering state based on the new structure
      state.filters = action.payload
    },
  },
})

export const { setFilters } = filteringSlice.actions
export default filteringSlice.reducer
