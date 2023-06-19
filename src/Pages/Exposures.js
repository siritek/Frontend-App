import React, { useState } from 'react';
import Newexposure from "../components/Exposure.components/Newexposure";  
import BootstrapTable from 'react-bootstrap-table-next';   
import { FnolData } from './Fnol';
import { policyData } from './PolicyInformation';
import { LossData } from './LossSummary';
import {ExposureData} from'../components/Exposure.components/Newexposure';


function Exposure(props){
  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  const handleBlankClick=()=>{
    props.onBlankClick();
  }
  const handleAppClick=()=>{
    props.onAppClick();
  }
  const handleClick=(e)=>{  
    // Access the component data from the state 
    const myFnolData = FnolData();  
    const myPolicyInfo = policyData(); 
    const myLossData = LossData(); 
    const myExposureData = ExposureData(); 
 
    // console.log('policyinfo-->',myPolicyInfo) 
    // console.log('Fnoldata -->', myFnolData) 
    // console.log('lossdata-->',myLossData) 
    // console.log('exposure--->',myExposureData) 
 
    const finalDataObj = { 
      "fnolData": myFnolData,  
      "policyInfoData": myPolicyInfo, 
      "lossData": myLossData, 
      "exposureData":myExposureData 
    } 
    //  console.log(finalDataObj); 
    // e.preventDefault()  
    // const abs={myFnolData,myPolicyInfo,myLossData,myExposureData}  
    console.log(finalDataObj)  
    fetch("http://localhost:8080/common/add",{  
        method:"POST",  
        headers:{"Content-Type":"application/json"},  
        body:JSON.stringify(finalDataObj) 
  
    }).then(()=>{  
        console.log("New claim added") 
        //console.log("thi s is loss data",myLossData)
         console.log("json sendto server",finalDataObj)
    })  
  }
  const columns = [ 
    { 
      dataField: "checkbox", 
      text: "Checkbox", 
      headerClasses: "checkbox-header", 
      classes: "checkbox-column", 
      headerFormatter: (cellContent, row) => ( 
        <div className="form-check"> 
          <input 
            type="checkbox" 
            className="form-check-input" 
            id={row.id} 
             
          /> 
        </div> 
      ), 
      formatter: (cellContent, row) => ( 
        <div className="form-check"> 
          <input 
            type="checkbox" 
            className="form-check-input" 
            id={row.id} 
            checked={row.selected} 
      onChange={() => handleCheckboxChange(row.id)} 
          /> 
        </div> 
 
      ), 
    }, 
    { 
      dataField: "id", 
      text: "#", 
      sort: true, 
      headerClasses: "id-header", 
      classes: "id-column", 
    }, 
    { 
      dataField: "Type", 
      text: "Type", 
      sort: true, 
      headerClasses: "Type-header", 
      classes: "Type-column", 
      formatter: (cellContent, row) => ( 
 
        <div className='row'> 
          <div className='col-12'> 
           
          </div> 
       
      </div>    
 
      ), 
    }, 
    { 
      dataField: "Coverage", 
      text: "Coverage", 
      sort: true, 
      headerClasses: "Coverage-header", 
      classes: "Coverage-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'>
            </div> 
          </div>         
      ), 
    }, 
 
     { 
      dataField: "Claimant", 
      text: "Claimant", 
      sort: true, 
      headerClasses: "Claimant-header", 
      classes: "Claimant-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    }, 

    { 
      dataField: "Involving", 
      text: "Involving", 
      sort: true, 
      headerClasses: "Involving-header", 
      classes: "Involving-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },

    { 
      dataField: "Status", 
      text: "Status", 
      sort: true, 
      headerClasses: "Status-header", 
      classes: "Status-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },

    { 
      dataField: "Created Via", 
      text: "Created Via", 
      sort: true, 
      headerClasses: "Created Via-header", 
      classes: "Created Via-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },
 
  ]; 
 
 
  const [tableData, setTableData] = useState([ 

  ]); 
 
  //Add new row on button click 
  const handleAddRow = () => {   
    const newRow = { id: tableData.length + 1, name: '', type: '' }; 
    setTableData([...tableData, newRow]); 
  }; 
 
  //Get the state of checked row 
  const handleCheckboxChange = (rowId) => { 
    setTableData((prevData) => 
      prevData.map((row) => 
        row.id === rowId ? { ...row, selected: !row.selected } : row 
      ) 
    ); 
  }; 
  const handleNewClick=()=>{
    props.onNewClick();
  }
 
  //Delete the checked row from the table 
  const handleDeleteRow = () => { 
    const updatedData = tableData.filter((row) => !row.selected); 
    setTableData(updatedData); 
  }; 
 

return (

    <div>
       <div className="d-flex justify-content-between align-items-center"> 
    <h2>Exposures</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleLossSummaryClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-dark" onClick={handleAppClick}>Cancel</button>&nbsp;
          <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={()=>{handleClick();handleBlankClick()}}/> 
          </div></div>
    <hr />
        {/* <Newexposure setComponentData={setComponentData} componentData={componentData} lossdataobj={LossData()}/> */}
       
        <div className="row p-1 m-0 ">
        
       
        <div className="col-16 d-flex justify-content-end">
          
            <button
              type="button"
              className="btn btn-success custom-margin-right-2"
              onClick={()=>{handleAddRow();handleNewClick();}}
              >
              Add exposures
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDeleteRow}
            >
              Delete
            </button>
          
        </div>
      </div>
      <BootstrapTable keyField="id" data={tableData} columns={columns} />

    </div>
  ); 
};

 
export default Exposure;  