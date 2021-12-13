import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
// import counterReducer from './reducers/counter'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Sample from './components/Sample'
import MatchHistory from './components/MatchHistory.js'
import Uncensored from './components/Uncensored.js';


const saveToLocalStorage = (reduxGlobalState) => {
  //serialization = converting js object to a string
  try{
    const serializeState = JSON.stringify(reduxGlobalState)
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  //deserialization = converting string to an object
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=> {
  //happens everytime there is a change to global state
  saveToLocalStorage(store.getState())
})




ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/uncensored' element={<Uncensored />} />
            <Route path='/match-history' element={<MatchHistory />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>,
  
  document.getElementById('root')
);
