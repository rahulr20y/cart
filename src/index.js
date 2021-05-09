import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

  // cart web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAIXtUppaEvzZD267TWmtOt5L-2YXbC28w",
    authDomain: "cart-3bb99.firebaseapp.com",
    projectId: "cart-3bb99",
    storageBucket: "cart-3bb99.appspot.com",
    messagingSenderId: "124544392458",
    appId: "1:124544392458:web:59b416d853ddcd43216ef3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

