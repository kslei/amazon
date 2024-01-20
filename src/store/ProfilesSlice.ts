import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Profile } from '../consts/interfaces'

interface ProfilesState {
  value: Profile[],
  count: number
}

const initialState: ProfilesState = {
  value: [],
  count: 0
}

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<ProfilesState['value']>) => {
      state.value = action.payload
    },
    setTotalCount: (state, action: PayloadAction<ProfilesState['count']>) => {
      state.count = action.payload
    }
  }
})

export const { addProfile, setTotalCount } = profilesSlice.actions
export const selectCount = (state: RootState) => state.profiles
export default profilesSlice.reducer