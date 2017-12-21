import * as PropTypes from "prop-types"
import * as React from "react"
import { Button, Text, View } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { State } from "../root/reducer"
import { actions  } from "./actions"

const delay = (duration: number) => (
  new Promise((resolve) => setTimeout(resolve, duration))
)

const propTypes = {
  actions: PropTypes.shape({
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
}

class Counter extends React.Component<PropTypes.InterfaceOf<typeof propTypes>> {

  public static propTypes = propTypes as any

  public render() {
    const { actions: { decrement, increment }, value } = this.props
    return (
      <View>
        <Text>Clicked: {value} times</Text>
        <Button title={"+"} onPress={increment} />
        <Button title={"-"} onPress={decrement} />
        <Button title={"Increment if odd"} onPress={this.incrementIfOdd} />
        <Button title={"Increment async"} onPress={this.incrementAsync} />
      </View>
    )
  }

  private incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.actions.increment()
    }
  }

  private incrementAsync = async () => {
    await delay(2000)
    await delay(2000)
    this.props.actions.increment()
  }
}

export default connect(
  (state: State) => ({
    value: state.counter,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Counter)
