import { createSlice } from '@reduxjs/toolkit'

interface DiscountsState {
  discounts: string[]
}

const initialState: DiscountsState = { discounts: [] }

const discountsSlice = createSlice({
  name: 'discounts',
  initialState,
  reducers: {
    setDiscounts(state, action) {
      state.discounts = action.payload
    },
  },
})

export const { setDiscounts } = discountsSlice.actions
export default discountsSlice.reducer
