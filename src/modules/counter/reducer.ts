import { createReducer } from "../../helpers/reducers"
import { ActionsToPayloads, types } from "./actions"

const initialState = 0 as number

export type State = typeof initialState

const counterReducer = createReducer<ActionsToPayloads, typeof initialState>({
  [types.INCREMENT]: (state, value) => (state + 1),
  [types.DECREMENT]: (state, value) => (state - 1),
}, initialState)

export default counterReducer
