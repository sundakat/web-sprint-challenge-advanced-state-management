import React from "react";
import "./App.scss";
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';

function App(){
    return (
      <div className="App">
        <h1>Smurfy State Management!</h1>
        
        
        <SmurfsForm />
        <hr/>
        <SmurfsList />
      </div>
    );
  
}

export default App;
