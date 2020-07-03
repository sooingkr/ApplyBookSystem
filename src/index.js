import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddelware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import rootReducer from "./bundles/common/reducers";
import rootSaga from './bundles/common/saga/index';

const sagaMiddelware = createSagaMiddelware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddelware))
);

sagaMiddelware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
