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
// import { publicRoutes } from './routes';

function App() {
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
