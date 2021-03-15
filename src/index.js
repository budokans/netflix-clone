import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyDQaSqizZvtITebeI7FhHBA-BErLecyCn0",
  authDomain: "netflix-clone-75c41.firebaseapp.com",
  projectId: "netflix-clone-75c41",
  storageBucket: "netflix-clone-75c41.appspot.com",
  messagingSenderId: "57891700688",
  appId: "1:57891700688:web:f9f598cfc72e36fc19c3d5",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
