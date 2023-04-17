import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
import  createSagaMiddleware  from 'redux-saga'
import myFirstReducer from "./reducer"
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ myFirstReducer })
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
)
