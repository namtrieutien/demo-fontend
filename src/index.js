import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Stateless from './Stateless';
//import Statefull from './Statefull';
//import State from './State';
//import StateProps from './StateProps';
//import ComponentCircle from './ComponentCircle';
//import ComponentApiSetState from './ComponentApiSetState';
//import ComponentApiForceUpdate from './ComponentApiForceUpdate';
//import ComponentApiFindDOMNode from './ComponentApiFindDOMNode';
//import ReactHookuseState from './ReactHookuseState';
//import ReactHookuseEffect from './ReactHookuseEffect';



import { Provider } from 'react-redux';

//import PracticeReduxApp from './PracticeReduxApp';
//import store from './redux_practise/store';

import App from './App';
import store from './redux/store';


import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

/*
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
