import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createSagaMonitor from "@clarketm/saga-monitor";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

import { save, load } from "redux-localstorage-simple"

export const history = createBrowserHistory();

function configureStoreDev() {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: createSagaMonitor({
      level: "log",
      actionDispatch: true,
    }),
  });

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const createStoreWithMiddleware = composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      save()
    ))(createStore)
  
    const store = createStoreWithMiddleware(
      createRootReducer(),    
      load()
    )    

  sagaMiddleware.run(rootSaga);

  return store;
}

const configureStore = configureStoreDev;

export default configureStore;
