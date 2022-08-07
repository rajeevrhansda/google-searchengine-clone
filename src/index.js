import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider} from './context/ResultContextProvider'

import App from './App';
import './global.css';




ReactDOM.render(<StateContextProvider> <Router><App/></Router></StateContextProvider>  ,document.getElementById('root'));
