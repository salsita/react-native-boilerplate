import { applyMiddleware, compose, createStore } from "redux"

import identityFn from "./helpers/identity-fn"
import rootReducer from "./modules/root/reducer"

const buildStore = () => (
  createStore(
    rootReducer,
    compose(
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : identityFn,
    ),
  )
)

export default buildStore
