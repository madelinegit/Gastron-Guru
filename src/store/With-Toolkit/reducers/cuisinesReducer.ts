import { createSlice } from '@reduxjs/toolkit'

interface CuisinesState {
  cuisines: string[]
}

const initialState: CuisinesState = { cuisines: [] }

const cuisinesSlice = createSlice({
  name: 'cuisines',
  initialState,
  reducers: {
    setCuisines(state, action) {
      state.cuisines = action.payload
    },
  },
})

export const { setCuisines } = cuisinesSlice.actions
export default cuisinesSlice.reducer
