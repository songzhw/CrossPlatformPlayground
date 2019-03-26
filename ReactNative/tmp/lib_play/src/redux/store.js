import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createEncryptor from "redux-persist-transform-encrypt";

import InputNameReducer from "./InputNameReducer";
import GoodsReducer from "./GoodsReducer";
import BooksReducer from "./BooksReducer";
import WhenToPersistReducer from "./WhenToPersistReducer";
import PersistFunctionReducer from "./PersistFunctionReducer";
import { withFuncTransform } from "./persist_transform/RestoreFunctionTransform";

const middlewares = [];
middlewares.push(createLogger());

const eshopReducer = combineReducers({ GoodsReducer, BooksReducer });
const eshopPersistConfig = {
  key: "eshop",
  storage: storage,
  blacklist: ["GoodsReducer"]
};
const wrappedEshopReducer = persistReducer(eshopPersistConfig, eshopReducer);

const reducer = combineReducers({
  InputNameReducer, eshop: wrappedEshopReducer,
  number: WhenToPersistReducer, obj: PersistFunctionReducer
});

const encryptor = createEncryptor({
  secretKey: "my-super-secret-key",
  onError: function(error) {
    console.log(`szw persist error when encrypt : ${JSON.stringify(error)}`);
  }
});

const persistRuducerConfig = {
  key: "k3",
  storage,
  blacklist: ["eshop"],
  transforms: [withFuncTransform]
  // transforms: [encryptor]
};
const persistedReducer = persistReducer(persistRuducerConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistore = persistStore(store);

