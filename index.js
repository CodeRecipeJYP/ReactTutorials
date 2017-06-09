/**
 * Created by jaeyoung on 2017. 6. 9..
 */
import React from "react";
import { render } from 'react-dom';

import Scoreboard from './src/containers/Scoreboard';
import './css/style.css';


render(
  <Scoreboard />,
  document.getElementById('root')
);