import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Checkout from "./Checkout";

const store = createStore(rootReducer);

export default class CreateStudent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Checkout />
      </Provider>
    );
  }
}
