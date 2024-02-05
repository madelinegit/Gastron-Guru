import { createSlice } from '@reduxjs/toolkit'

interface SortingState {
  sortBy: string
}

const initialState: SortingState = {
  sortBy: 'Rating',
}

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
  },
})

export const { setSortBy } = sortingSlice.actions
export default sortingSlice.reducer
