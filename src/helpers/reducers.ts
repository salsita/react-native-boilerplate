import { AnyAction } from "redux"

type ActionToReducerMap<Map, State> = Partial<{ [Key in keyof Map]: (state: State, value: Map[Key]) => State }>

export const createReducer = <Map, State>(map: ActionToReducerMap<Map, State>, initialState: State) => (
  (state: State = initialState, action: AnyAction) => {
    const reducer = map[action.type as keyof Map]
    if (reducer) {
      return reducer(state, action.value)
    } else {
      return state
    }
  }
)
