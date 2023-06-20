import React, { useState } from 'react';
// import Newexposure from "../components/Exposure.components/Newexposure";  
// import BootstrapTable from 'react-bootstrap-table-next';   
import { FnolData } from './Fnol';
import { policyData, policyInfoObj } from "./PolicyInformation";
import { LossData } from './LossSummary';
import {ExposureData,ExposureDataObj} from'../components/Exposure.components/Newexposure';
import { Button } from "react-bootstrap";
import ClaimGeneration from './ClaimGeneration';


function Exposure(props){
  //const [exposuresubmitclick, setExposuresubmitclick] = useState(false);
  //const [componentData, setComponentData] = useState({});

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

    //ExposureDataObj = {ExposureData}

    const myFnolData = FnolData();
    const myPolicyInfo = policyData();
    const myLossData = LossData();
    const myExposureData = ExposureData();

    const finalDataObj = {
      "fnolData": myFnolData,
      "policyInfoData": myPolicyInfo,
      "lossData": myLossData,
      "exposureData": myExposureData
    } 
    //  console.log(finalDataObj); 
    // e.preventDefault()  
    // const abs={myFnolData,myPolicyInfo,myLossData,myExposureData}  
    console.log(finalDataObj)  
    fetch("http://localhost:8080/common/add",{  
        method:"POST",  
        headers:{"Content-Type":"application/json"},  
        body:JSON.stringify(finalDataObj) 
  
    }).then(() => {  
      console.log("New claim added");  
      generateClaimNumber(); // Call the generateClaimNumber function  
    })  
    .catch((error) => {  
      console.error("Error adding new claim:", error);  
    });  
  }  

  const generateClaimNumber = () => { 
    const fnolData = FnolData(); // Call FnolData() to retrieve the data 
    const policyNumber = fnolData.policyNumber; 
   
    console.log("Policy Number:", policyNumber); 
    fetch("http://localhost:8080/claim/generateClaimNumber", { 
      method: "POST", 
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
      body: `policyNumber=${policyNumber}`, 
    }) 
      .then((response) => response.json()) 
      .then((data) => { 
        console.log("Claim Number:", data.claimNumber); 
        props.setClaimNumber({ 
          claimNumber: data.claimNumber, 
          policyNumber: policyNumber, 
        }); 
        handleBlankClick(); 
      }) 
      .catch((error) => { 
        console.error("Error generating claim number:", error); 
      }); 
  }; 



  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);


  function handleChange(e, index, name) {
    const { value } = e.target;
    const updatedInputArr = [...inputarr];
    updatedInputArr[index][name] = value;
    setInputarr(updatedInputArr);
  }

    function handleCheckboxChange(e, index) {
    const { checked } = e.target;
    const updatedInputArr = [...inputarr];
    updatedInputArr[index].checked = checked;
    setInputarr(updatedInputArr);
  }

    function handleAllCheckedChange(e) {
    const { checked } = e.target;
    setAllChecked(checked);
    const updatedInputArr = inputarr.map((item) => ({ ...item, checked: checked }));
    setInputarr(updatedInputArr);
  }

  function handleDelete() {
    const updatedInputArr = inputarr.filter((item) => !item.checked);
    setInputarr(updatedInputArr);
    setAllChecked(false);
  }

  function handleSubmit() {
    const updatedInputArr = inputarr.map((item) => ({
      ...item,
      submitted: true,
    }));
    setInputarr(updatedInputArr);
    console.log(updatedInputArr);
  }

  function handleAdd() {
    setInputarr([
      ...inputarr,
      {
        checked: false,
        LossParty: "",
        PrimaryCoverage: "",
        ClaimantType: "",
        Status: "",
        Adjuster: "",
        submitted: false,
      },
    ]);
  }
 
 
  const [tableData, setTableData] = useState([ 

  ]); 
 
  //Add new row on button click 
  const handleAddRow = () => {   
    const newRow = { id: tableData.length + 1, name: '', type: '' }; 
    setTableData([...tableData, newRow]); 
  }; 
 
  // //Get the state of checked row 
  // const handleCheckboxChange = (rowId) => { 
  //   setTableData((prevData) => 
  //     prevData.map((row) => 
  //       row.id === rowId ? { ...row, selected: !row.selected } : row 
  //     ) 
  //   ); 
  // }; 
  const handleNewClick=()=>{
    props.onNewClick();
  }
 
  //Delete the checked row from the table 
  // const handleDeleteRow = () => { 
  //   const updatedData = tableData.filter((row) => !row.selected); 
  //   setTableData(updatedData); 
  // }; 

 

return (
  <div>
    <div className="d-flex justify-content-between align-items-center">
      <h2>Exposures</h2>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleLossSummaryClick}
        >
          Back
        </button>
        &nbsp;
        <button type="button" className="btn btn-dark" onClick={handleAppClick}>
          Cancel
        </button>
        &nbsp;
        <input
          type="submit"
          className="btn btn-success custom-margin-right-1"
          value="Submit"
          onClick={() => {
            handleClick();
            handleBlankClick();
          }}
        />
      </div>
    </div>
    <hr />
    {/* <Newexposure setComponentData={setComponentData} componentData={componentData} lossdataobj={LossData()}/> */}

    <div className="row p-1 m-0 ">
      <div className="col-16 d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success custom-margin-right-2"
          onClick={() => {
            handleAddRow();
            handleNewClick();
          }}
        >
          Add exposures
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleDelete}
          // onClick={handleDeleteRow}
        >
          Delete
        </button>
      </div>
    </div>
    {/* <BootstrapTable keyField="id" data={tableData} columns={columns} /> */}

    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-4 align-right">
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
          &nbsp;
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>

      <div className="App">
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleAllCheckedChange}
                  />
                </th>
                <th> ID </th>
                <th> LossParty </th>
                <th> PrimaryCoverage </th>
                <th> ClaimantType </th>
                <th> status </th>
                <th> adjuster </th>
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={8} className="text-center">
                    No data Entered yet !
                  </td>
                </tr>
              ) : (
                inputarr.map((info, ind) => {
                  return (
                    !info.deleted && (
                      <tr key={ind}>
                        <td>
                          <input
                            type="checkbox"
                            checked={info.checked}
                            onChange={(e) => handleCheckboxChange(e, ind)}
                          />
                        </td>

                        <td>{ind + 1}</td>

                        <td>{policyInfoObj.policyType}</td>

                        <td>{ExposureDataObj.primaryCoverage}</td>

                        <td>{ExposureDataObj.claimant}</td>

                        <td>
                          <input
                            type="text"
                            name="Involving"
                            value={info.Involving}
                            onChange={(e) => handleChange(e, ind)}
                            className="form-control"
                          />
                        </td>

                        <td>
                          <input
                            type="text"
                            name="Status"
                            value={info.Status}
                            onChange={(e) => handleChange(e, ind)}
                            className="form-control"
                          />
                        </td>
                      </tr>
                    )
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {props.claimNumber && (
      <ClaimGeneration
        claimNumber={props.claimNumber}
        policyNumber={props.policyNumber}
      />
    )}
  </div>
); 
};
// const ExposureData = () => {
//   return ExposureDataObj;
// }

export default Exposure 