import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDch-2bjdRWx1a_-VG5RjVItd5cgZphuKk",
  authDomain: "info340sp-group09-project.firebaseapp.com",
  projectId: "info340sp-group09-project",
  storageBucket: "info340sp-group09-project.appspot.com",
  messagingSenderId: "971379090242",
  appId: "1:971379090242:web:6fce731a3e7f93d4689edb"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

