import { combineReducers } from "redux"

import counter, { State as CounterState } from "../counter/reducer"

export type State = {
  counter: CounterState,
}

export default combineReducers<State>({
  counter,
})
