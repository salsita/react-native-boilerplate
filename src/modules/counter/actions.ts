
export const enum types {
  DECREMENT = "COUNTER_DECREMENT",
  INCREMENT = "COUNTER_INCREMENT",
}

export type ActionsToPayloads = {
  [types.DECREMENT]: undefined,
  [types.INCREMENT]: undefined,
}

const buildAction = <K extends keyof ActionsToPayloads>(type: K, value: ActionsToPayloads[K]) => ({
  type,
  value,
})

export const actions = {
  decrement: () => (buildAction(types.DECREMENT, undefined)),
  increment: () => (buildAction(types.INCREMENT, undefined)),
}
