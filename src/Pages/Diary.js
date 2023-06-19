import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Form from "react-bootstrap/Form";
var DairyDataObj;
function Dairy(){ 
  const[componentData,setComponentData]=useState({});
const handleInputChange = (e) => { 
  const { id, value } = e.target;
    if (id === "relatedTo") {
      setRelatedTo(value);
    } else if (id === "assignedTo") {
      setAssignedTo(value);
    } else if (id === "createdBy") {
      setCreatedBy(value);
    } else { 
  const {id, value} = e.target;  
  setComponentData((prevData) =>({  
    ...prevData,  
    [id]:value,  
  }));
}  
};  

const[relatedTo, setRelatedTo] = useState('');
const[relatedTos, setRelatedTos] = useState([]);

const [createdBy, setCreatedBy] = useState('');
const[createdBys, setCreatedBys] = useState([]);

const[assignedTo, setAssignedTo] = useState('');
const[assignedTos, setAssignedTos] = useState([]);

useEffect(() => {
  fetchdairyDD();
}, []);

const fetchdairyDD = async () => {
  try {
    const response = await axios.get('http://localhost:8080/diaryDD');
    console.log('Response data: dairyDD', response.data);
    const { relatedTos, createdBy, assignees } = response.data;

    // Assign the retrieved values to the state variables
    setRelatedTos(relatedTos);
    setCreatedBys(createdBy);
    setAssignedTos(assignees);
  } catch (error) {
    console.error('Error fetching dairyDD:', error);
  }
};

const handlerealtedToChange = (event) => {
  setRelatedTo(event.target.value);
  handleInputChange(event); 
}
const handleCreatedByChange = (event) => {
  setCreatedBy(event.target.value);
  handleInputChange(event); 
}
const handleAssignedToChange = (event) => {
  setAssignedTo(event.target.value);
  handleInputChange(event);
}


const{ 
  subject='', 
 description='', 
  //related='', 
    dueDate='', 
    priority='', 
    details='', 
    //assignedTo='',
    //createdBy='',
    dateCreated='',  
} = componentData || {}; 


const handleNext = () => {
  // Access the component data from the state
  DairyDataObj = componentData
  console.log(componentData);
  // Perform further actions with the data
};
    return(   
      <div>
        <div className="d-flex justify-content-between align-items-center"> 
      <h2>Diary</h2>
      <button type="button" className="btn btn-success" onClick={handleNext}>Submit</button>
      </div>
      <hr/>
      <div className='row'> 
         <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='subject' >Subject</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id='subject' value={subject} onChange={handleInputChange} className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='description'>Description</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id='description' value={description} onChange={handleInputChange} className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
         <div className='col-4'>
         <label htmlFor='related'>Related To</label></div>  
          <div className='col-5'>  
            <Form.Select id="related" value={relatedTo} onChange={handlerealtedToChange} className='w-100 form-control'>  

              {relatedTos.map((relatedTo,index) => {
                return <option key={index} value={relatedTo}>{relatedTo}</option>;
              })}

            </Form.Select>  
          </div> 
          </div>

          <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dueDate">Due Date</label>
     
   </div>
   <div className='col-5'>
     <input  id="dueDate" type="date" value={dueDate}  
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>
        
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='priority'>Priority</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id='priority' value={priority} onChange={handleInputChange} className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 


        <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='details'>Details</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id="details" value={details}onChange={handleInputChange}  className='w-100 form-control' maxLength={25}/> 
          </div> 
          </div>

          <div className='row mb-2'> 
          <div className='col-4'>
            <label htmlFor='assignedTo'>Assigned To</label></div> 
          <div className='col-5'> 
            <Form.Select id='assignedTo' value={assignedTo} onChange={handleAssignedToChange}  className='w-100 form-control'> 
              {assignedTos.map((assigned,index) => {
                return <option key={index} value={assigned}>{assigned}</option>;
              })} 
            </Form.Select> 
          </div> 
        </div>        

        <div className='row mb-2'> 
          <div className='col-4'><label htmlFor='createdBy'>Created By</label></div> 
          <div className='col-5'> 
            <Form.Select  id="createdBy" value={createdBy} onChange={handleCreatedByChange} className='w-100 form-control'> 
               {createdBys.map((createdBy,index)=> {
                 return <option key={index} value={createdBy}>{createdBy}</option>;
               })}
            </Form.Select> 
          </div> 
        </div> 

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dateCreated">Date Created</label>
     
   </div>
   <div className='col-5'>
     <input  id="dateCreated" type="date" value={dateCreated}  
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>
        
        </div>
        </div>
          
       
    )
}

export default Dairy;