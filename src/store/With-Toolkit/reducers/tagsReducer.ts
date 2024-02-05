import { createSlice } from '@reduxjs/toolkit'

interface TagsState {
  tags: string[]
}

const initialState: TagsState = { tags: [] }

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, action) {
      state.tags = action.payload
    },
  },
})

export const { setTags } = tagsSlice.actions
export default tagsSlice.reducer
