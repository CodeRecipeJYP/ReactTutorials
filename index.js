/**
 * Created by jaeyoung on 2017. 6. 9..
 */
import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import PlayerReducer from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';
import './css/style.css';


const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store} >
    <Scoreboard />,
  </Provider>,
  document.getElementById('root')
);