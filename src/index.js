import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'material-design-lite';

const config = {
  apiKey: 'AIzaSyCfPH-FC_mTEDkPlbPFSVQAb4A380zhyI4',
  authDomain: 'askbook-89403.firebaseapp.com',
  databaseURL: 'https://askbook-89403.firebaseio.com',
  projectId: 'askbook-89403',
  storageBucket: 'askbook-89403.appspot.com',
  messagingSenderId: '204708459259',
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
