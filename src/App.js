import { useState } from "react"; 
import Header from "./Header"; 
import SideNavigation from "./SideNavigation"; 
import { Col, Row } from "reactstrap"; 
import Fnol from "./Pages/Fnol"; 
import PolicyInformation from "./Pages/PolicyInformation"; 
import Documents from "./Pages/Documents"; 
import NewDoc from "./components/Documents.components/NewDoc"; 
import Upload from "./components/Documents.components/Upload";
import Losssummary from "./Pages/LossSummary";
import Diary from "./Pages/Diary";
import Exposures from "./Pages/Exposures";
// import Newexposure from "./components/Exposure.components/Newexposure";
// import Searchexposure from "./components/Exposure.components/Searchexposures";
import NewNote from "./NewNote";
import SearchNote from "./SearchNote";
import Search from "./Pages/Search";


 
function App() { 
  const [activeSection, setActiveSection] = useState(null); 
 
  const handleSectionClick = (section) => { 
    setActiveSection(section); 
  }; 
 
  return ( 
    <> 
    
      <Row> 
        <Col> 
          <Header onFnolClick={()=>setActiveSection("fnol")} onSearchClick={()=>setActiveSection("search")} ></Header> 
        </Col> 
      </Row> 
 
      <div style={{ display: "flex" }}> 
        <SideNavigation onSectionClick={handleSectionClick} /> 
 
        <div style={{ marginLeft: "10px", width: "100%" }}> 
          {activeSection === "fnol" && <Fnol onPIClick={()=>setActiveSection("pi")} />} 
          {activeSection === "pi" && (<PolicyInformation onFnolClick={()=>setActiveSection("fnol")} onLossSummaryClick={()=>setActiveSection("losssummary")}/>)} 
          {activeSection === "documents" && (<Documents onNewDocClick={() =>setActiveSection("newDoc")} onUploadClick={() => setActiveSection("upload")} />)} 
          {activeSection === "newDoc" && <NewDoc onDocumentClick={()=>setActiveSection("documents")} />} 
          {activeSection === "upload" && <Upload onDocumentClick={()=>setActiveSection("documents")}/>} 
          {activeSection === "losssummary" && <Losssummary onPIClick={()=>setActiveSection("pi")} onExposureClick={()=>setActiveSection("Exposures")}/>}
          {activeSection === "Exposures" && <Exposures onLossSummaryClick={()=>setActiveSection("losssummary")} />}
          {/* {activeSection === "newexposure" && <Newexposure/>}
          {activeSection === "searchexposure" && <Searchexposure/>}   */}
          {activeSection === "newnote" && <NewNote/>}
          {activeSection === "searchnote" && <SearchNote/>}
          {activeSection === "diary" && <Diary/>}
          {activeSection === "search" && <Search/>}
          
         
        </div> 
      </div> 
     
    </> 
  ); 
} 
 
export default App;  