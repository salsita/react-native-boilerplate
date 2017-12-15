
type Action<T extends keyof M, M> = {
  type: T
  value: M[T]
}
