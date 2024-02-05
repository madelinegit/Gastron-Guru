import { createSlice } from '@reduxjs/toolkit'

interface FiltersState {
  filters: string[]
}

const initialState: FiltersState = { filters: ['All'] }

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    //add the functionality here instead of withFiltering.tsx
    //logic for filtering
    setFilters(state, action) {
      state.filters = action.payload
    },
  },
})

export const { setFilters } = filtersSlice.actions
export default filtersSlice.reducer
