import React, { useState,useEffect } from 'react';
import Injuries from "../components/Losssummary.components/Injuries";
import Lossdetails from "../components/Losssummary.components/Lossdetails";
import Witnesses from "../components/Losssummary.components/Witnesses";
import Losslocation from "../components/Losssummary.components/losslocation";
import Properties from "../components/Losssummary.components/properties";
// import Heading from "./components/header.component";
import { FnolData } from './Fnol';

var LossDataObj;
function Losssummary(props) { 
  const [componentData, setComponentData] = useState({});

  const handlePIClick=()=>{
 props.onPIClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    LossDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };
    const handleExposureClick=()=>{
      props.onExposureClick();
    };
    useEffect(() => {
      if (Object.keys(componentData).length === 0 && LossDataObj !== undefined) {
        setComponentData(LossDataObj);
      }
    }, []);
    
    return ( 
      <div> 
        <div className="d-flex justify-content-between align-items-center"> 
    <h2>Loss Summary</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handlePIClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={() => { handleExposureClick(); handleNext(); }}>
  Next
</button>
          
          </div></div>
    <hr />
    
        <div className='row'> 
          <div className='col-6'> 
          <Lossdetails setComponentData={setComponentData} componentData={componentData} fnoldataobj={FnolData()} />
          </div> 
            
          <div className='col-6'> 
            <Losslocation setComponentData={setComponentData} componentData={componentData}/> 
           </div> 
           <hr />  
           <div className='col-6'> 
            <Properties/> 
           </div>
           <div className='col-6'>
            <Injuries/>
           </div>
           <hr/>
           <div className='col-6'>
           <Witnesses/>
           </div>

        </div> 
      </div> 
    ); 
   
  } 
  const LossData = () => {
    return LossDataObj
  }
   
  export {LossData, Losssummary};