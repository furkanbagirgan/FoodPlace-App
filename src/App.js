import React from "react";
import Router from "./Router";
import FlashMessage from "react-native-flash-message";

function App(){
  return (
    <>
      <Router />
      <FlashMessage position="bottom" />
    </>
  );
};

export default App;
