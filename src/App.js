import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import MaterialTable from 'material-table'

import JsonDataDisplay from './data/test';
import Formnew from './data/form2';
import { useState } from "react";


function App() {
  const [claimsState, setclaimsState] = useState();


            // console.log(info)
            console.log(claimsState)

let A= JsonDataDisplay;
let B=Formnew;
let C=Formnew
if (claimsState === "claims_amount") {
  C=A
  console.log(C)
}
else if (claimsState==="claims_count") {
  C=B
  console.log(B)
}
 

  return (
    <div className="App">
      <h1>Hello from samaki!!!</h1>
      <div className='divselect'>
      <select
        className="justify-content-center"
        value={claimsState}
        onChange={(e) => {
          const selectedclaims= e.target.value;
          setclaimsState(selectedclaims);
        }}
      >
        <option value="claims_amount">claims_amount</option>
        <option value="claims_count">claims_count</option>

      </select>
      </div>
      <h1>{claimsState}</h1>
      {/* <JsonDataDisplay/> */}
      <C/>
    </div>
  );
}

export default App;
