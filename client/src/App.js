
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateComplain from "./pages/CreateComplain";
import Complain from "./pages/Complain";
import Completed from "./pages/Completed";
import Owned from "./pages/Owned";
import Pending from "./pages/Pending";
import User from "./pages/User";
import WithNav from "./pages/WithNav";
import WithoutNav from "./pages/WithoutNav";
import Report from "./pages/Report";
import Requests from "./pages/Requests";
import CreateReq from "./pages/CreateReq";
import ComplainR from "./pages/ComplainR";
import CompletedReq from "./pages/CompletedReq";
import OwnedReq from "./pages/OwnedReq";
import PendingReq from "./pages/PendingReq";


function App() {

  return (
    <div className="App">
      <Router>
     
      
        <Routes>
        

        <Route element={<WithoutNav />}>
        <Route path="/" element={<User/>} ></Route> 
        <Route path="/createcomplain" element={<CreateComplain/>} ></Route>
        <Route path="/createreq" element={<CreateReq/>} ></Route>
        </Route>
        <Route element={<WithNav />}>
        <Route path="/admin" element={<Home />}></Route>
        <Route path="/complain/:id" element={<Complain/>} ></Route> 
        <Route path="/completed" element={<Completed/>} ></Route> 
        <Route path="/owned" element={<Owned/>} ></Route> 
        <Route path="/pending" element={<Pending/>} ></Route> 
        <Route path="/report" element={<Report/>} ></Route>
        <Route path="/request" element={<Requests/>} ></Route>
        <Route path="/request/:id" element={<ComplainR/>} ></Route> 
        <Route path="/completedreq" element={<CompletedReq/>} ></Route> 
        <Route path="/ownedreq" element={<OwnedReq/>} ></Route> 
        <Route path="/pendingreq" element={<PendingReq/>} ></Route> 


        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
