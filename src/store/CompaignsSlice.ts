import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Compaign } from '../consts/interfaces'

interface CompaignsState {
  value: Compaign[],
  count: number
}

const initialState: CompaignsState = {
  value: [],
  count: 0
}

export const compaignsSlice = createSlice({
  name: 'compaigns',
  initialState,
  reducers: {
    addCompaign: (state, action: PayloadAction<CompaignsState['value']>) => {
      state.value = action.payload
    },
    setTotalCount: (state, action: PayloadAction<CompaignsState['count']>) => {
      state.count = action.payload
    }
  }
})

export const { addCompaign, setTotalCount } = compaignsSlice.actions
export const selectCount = (state: RootState) => state.compaigns
export default compaignsSlice.reducer