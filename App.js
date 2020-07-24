// RN Libray
import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
enableScreens();

import Navigation from "./config/navigation";
import Store from "./config/redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
