import Admin from "./admin";
import Dashboard from "./dashboard";
import Users from "./users";
import Createuser from "./create_user";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import "./sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    
    <BrowserRouter>
    
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            
            <Routes>
            <Route path="/admin" element={<Admin/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/users" element={<Users/>}></Route>
              <Route path="/create_user" element={<Createuser/>}></Route>

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
