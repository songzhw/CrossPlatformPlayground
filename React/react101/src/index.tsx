import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { SlowListReducer } from "./performance/slow_list/SlowListReducer";
import SlowListScreen from "./performance/slow_list/SlowListScreen";
import SlowListClass from "./performance/slow_list/SlowListClass";
import { BetterListReducer } from "./performance/better_list/BetterListReducer";
import BetterListScreen from "./performance/better_list/BetterListScreen";
import { IntervalPitfsall } from "./Rtutor/hooks/useState/IntervalPitfall";

const store: Store = createStore(BetterListReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IntervalPitfsall/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

