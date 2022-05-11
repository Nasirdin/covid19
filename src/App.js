import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import Home from "./componets/Home";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
};

export default App;
