import React, { useState } from 'react';
import FnolTypeOfPolicy from "../components/Fnol.components/FnolTpeOfPolicy"
import FnolDetails from "../components/Fnol.components/FnolDetails"
//import { useState } from "react";
 
var FnolDataObj;
function Fnol(props) { 
  const [componentData, setComponentData] = useState({});
  
  const handlePIClick=()=>{
    //console.log(componentData);
   // setPage(prevPage => prevPage - 1);
    props.onPIClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    FnolDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };
  
  return ( 
     <div> 
 <div>
 <div className="d-flex justify-content-between align-items-center">
          <h2>FNOL (First Notice Of Loss)</h2>
          <button type="button" className="btn btn-success" onClick={() => { handlePIClick(); handleNext(); }}>
            Next
          </button>
          </div>
     
     <hr />
   </div>
      <div className='row'>
        <div className='col-6'>
          <FnolDetails setComponentData={setComponentData} componentData={componentData} />
        </div>

        <div className='col-6'>
        
          <FnolTypeOfPolicy />
          </div>
          
  </div>
      </div>    
 
  ); 
} 
const FnolData = () => {
  return FnolDataObj
}
 
export{Fnol, FnolData } 