import { createSlice } from '@reduxjs/toolkit'

interface RatingState {
  rating: string
}

const initialState: RatingState = {
  rating: 'All',
}

const sortingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating(state, action) {
      state.rating = action.payload
    },
  },
})

export const { setRating } = sortingSlice.actions
export default sortingSlice.reducer
