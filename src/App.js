import "antd/dist/antd.min.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { Route, Routes } from "react-router-dom/dist";
import Main from "./components/layout/Main";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Billing from "./pages/Billing";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";
// import { publicRoutes } from './routes';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey:
            "BDYnLI-lWyP8cZUlOscmyqO4VGNVWVCMkio1T8ZZOoVW227bA-UoTYX4N_QpXzJOOjayK79OvJg_p00PnqyolZM",
        })
        console.log('Token Gen', token)
      }else if(permission === "denied") {
        alert('you denied for the notification')
      }
  }
  
  
  useEffect(()=>{
    requestPermission()
  },[])
  


  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Main />}>
            {/* public routes */}

            {/* private routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="billing" element={<Billing />} />
            <Route path="profile" element={<Profile />} />
            <Route from="*" to="/dashboard" />
          </Route>
          {/* {publicRoutes.map((route, index) =>{
          const Page = route.component;
          // let PersonalLayout = 
          return (
          <Route
          key={index}
            path={route.path}
            element={
              <>
              <Page />
              </>
            }
            />
            );
            
          })} */}
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
