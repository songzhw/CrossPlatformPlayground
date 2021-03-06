import { createStore } from "./createStore";

const addLogToDispatch = (store) => {
  const next = store.dispatch;

  // return another dispatch(action) method
  return (action) => {
    console.group(action.type);
    console.log("%c previous state", "color: gray", store.getState());
    const ret = next(action);
    console.log("%c next state", "color: green", store.getState());
    console.group(action.type);
    return ret;
  };
};

const addHttpToDispatch = (store) => {
  const next = store.dispatch;

  return (action) => {
    if (action.type === "ACTION_HTTP_REQUEST") {
      console.log(`Mimic fetch(action.url, action.header, action.body)`);
      let fakeResponseAction = { type: ACTION_HTTP_RESPONSE, payload: { name: "resp" } };
      return next(fakeResponseAction);
    }
  };
};


const configStore = (reducer) => {
  const store = createStore(reducer);
  store.dispatch = addLogToDispatch(store);
  store.dispatch = addHttpToDispatch(store); // 这里的store.dispatch已经是包装过一次的新dispatch了
  return store;
};

// ============== version 2 ==============
const configStore2 = (reducer) => {
  const store = createStore(reducer);

  const middlewares = [];
  middlewares.push(addLogToDispatch);
  middlewares.push(addHttpToDispatch);
  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};


const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.forEach(middleware => store.dispatch = middleware(store));
};
