import * as React from "react"
import { StyleSheet } from "react-native"
import { Provider } from "react-redux"

import buildStore from "./build-store"
import Root from "./modules/root/component"

const store = buildStore()

export default class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
})
