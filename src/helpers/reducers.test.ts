import { createReducer } from "./reducers"

const enum types {
  TEST1 = "1",
  TEST2 = "2",
}

type Map = {
  [types.TEST1]: number,
  [types.TEST2]: string,
}

describe("reducers test", () => {
  it("should return the same reference", () => {

    const reducer = createReducer<Map, number>({
      [types.TEST1]: (state, value) => (state + value),
      [types.TEST2]: (state, value) => (state + value.length),
    }, 0)

    expect(reducer(5, { type: [types.TEST1], value: 5})).toBe(10)
    expect(reducer(5, { type: [types.TEST2], value: "abcde"})).toBe(10)
  })
})
