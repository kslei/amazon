import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Account } from '../consts/interfaces'

interface AccountsState {
  value: Account[],
  count: number
}

const initialState: AccountsState = {
  value: [],
  count: 0
}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<AccountsState['value']> ) => {
      state.value = action.payload
    },
    setTotalCount: (state, action: PayloadAction<AccountsState['count']> ) => {
      state.count = action.payload
    }
  }
})

export const { addAccount, setTotalCount } = accountsSlice.actions
export const selectCount = (state: RootState) => state.accounts
export default accountsSlice.reducer