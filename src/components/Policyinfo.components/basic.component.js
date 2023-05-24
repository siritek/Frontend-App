import React from 'react'
import Form from "react-bootstrap/Form";
// import Dropdown from 'react-bootstrap/Dropdown'; 
 
function Basic({ setComponentData, componentData }) { 
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const {
    PolicyNumber = '',
    PolicyType = '',
    PolicyVerified= '',
    DateOfLoss= '',
    TimeOfLoss = '',
    Underwriting = '',
    EffectiveDate = '',
    ExpirationDate= '',
    CancellationDate = '',
    OriginalEffectiveDate = '',
    PolicyStatus= '',
  } = componentData || {};

  return (
    <div className="ms-3">
      <h5>Basic Information</h5>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="PolicyNumber">Policy Number</label>
          </div>
          <div className="col-8">
            <input
              id="PolicyNumber"
              value={PolicyNumber}
              onChange={handleInputChange}
              type="number"
              className="w-100 form-control"
              maxLength={25}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="PolicyType">Policy Type</label>
          </div>
          <div className="col-8">
            <Form.Select
              id="PolicyType"
              value={PolicyType}
              onChange={handleInputChange}
              aria-label="Default select example"
            >
              <option value="None">None</option>
              <option value="Personal Auto">Personal Auto</option>
              <option value="Commercial Auto">Commercial Auto</option>
              <option value="Homeowners">Homeowners</option>
              <option value="Genral Liability">Genral Liability</option>
              <option value="Mutual">Mutual</option>
              <option value="Worker Compensation">Worker Compensation</option>
            </Form.Select>
          </div>
        </div>

        {/* <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}

        <div className="row mb-3">
          <div className="col-4">Policy Verified</div>
          <div className="col-8">
            <input
              type="radio"
              name="basicRadioGroup"
              id="PolicyVerified-yes"
              value="yes"
              checked={PolicyVerified === "yes"}
              onChange={handleInputChange}
            />{" "}
            Yes <span className="ms-3"></span>
            <input
              type="radio"
              name="basicRadioGroup"
              id="PolicyVerified-no"
              value="no"
              checked={PolicyVerified === "no"}
              onChange={handleInputChange}
            />{" "}
            No
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Dateofloss">Date of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="Dateofloss"
              value={DateOfLoss}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Timeofloss">Time of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="time"
              className="w-100 form-control"
              id="Timeofloss"
              value={TimeOfLoss}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Underwriting">Underwriting Company</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              id="Underwriting"
              value={Underwriting}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="EffectiveDate">Effective Date</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="EffectiveDate"
              value={EffectiveDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="ExpirationDate">Expiration Date</label>
            <i className="text-danger h5">*</i>
          </div>
          <diiv className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="ExpirationDate"
              value={ExpirationDate}
              onChange={handleInputChange}
            />
          </diiv>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="CancellationDate">Cancellation Date</label>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="CancellationDate"
              value={CancellationDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="OriginalEffectiveDate">
              Original Effective Date
            </label>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="OriginalEffectiveDate"
              value={OriginalEffectiveDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="PolicyStatus">Policy Status</label>
          </div>
          <div className="col-8">
            <Form.Select
              aria-label="Default select example"
              id="PolicyStatus"
              value={PolicyStatus}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="In Effect">In Effect</option>
              <option value="Pre-Cancellation">Pre-Cancellation</option>
              <option value="Expired">Expired</option>
              <option value="Other">Other</option>
            </Form.Select>
          </div>
        </div>

        <hr />
        <h5>Insured</h5>
        <div className="row mb-2">
          <div className="col-4">
            <label>Name</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input type="text" className="w-100 form-control" />
            {/* <select className='w-200 form-control'> 
              <option>Ray Newton</option> 
              <option>None</option> 
            </select> */}
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-4">
            <label>Address</label>
          </div>
          <div className="col-8">
            <input type="text" className="w-100 form-control" />
          </div>
        </div>

        {/* <div className='row mb-2'> 
          <div className='col-4'><label>Account Name</label></div> 
        </div> 
 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Account Number</label></div> 
          <div className='col-8'> 
            <input type="number" className='w-100 form-control' /> 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Service Tier</label></div> 
          <div className='col-8'> 
            <input type="number" className='w-100 form-control' /> 
          </div> 
        </div> */}
      </div>
    </div>
  ); 
} 
 
export default Basic 


















// import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';


// function Basic() {
//   return (
//     <div className='ms-3'>
//       <h5>Basic Information</h5>
//       <div className='row'>
//         <div className='row mb-2'>
//           <div className='col-4'>
//             <label>Policy Nmber</label>
//           </div>
//           <div className='col-8'>54-123456</div>
//         </div>
//         <div className='row mb-2'>
//           <div className='col-4'><label>Type</label></div>
//           <div className='col-8'>Personal Auto</div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Effective Date</label><i className='text-danger h5'>*</i></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Expiration Date</label><i className='text-danger h5'>*</i></div>
//           <diiv className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </diiv>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Cancellation Date</label></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Original Effective Date</label></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Status</label></div>
//           <div className='col-8'>
//             <select className='w-100 form-control'>
//               <option>In force</option>
//               <option>None</option>
//             </select>
//           </div>
//         </div>

//         <hr />
//         <h5>Insured</h5>
//         <div className='row mb-2'>
//           <div className='col-4'><label>Name</label><i className='text-danger h5'>*</i></div>
//           <div className='col-8'>
//             <select className='w-100 form-control'>
//               <option>Ray Newton</option>
//               <option>None</option>
//             </select>
//           </div>
//         </div>

//         <div className='row mb-5'>
//           <div className='col-4'><label>Address</label></div>
//           <div className='col-8'>287 Kensigton rd, #1A, South Pasadena, CA 91145</div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Account Name</label></div>
//         </div>


//         <div className='row mb-2'>
//           <div className='col-4'><label>Account Number</label></div>
//           <div className='col-8'>
//             <input type="number" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Service Tier</label></div>
//           <div className='col-8'>
//             <input type="number" className='w-100 form-control' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Basic


