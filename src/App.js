import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import { AuthProvider } from './context/AuthContext';
// import LoginPage from './pages/LoginPage'
import HomePage from "./pages/HomePage";
// import PrivateRoutes from "./helper/PrivateRoutes";
function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <BrowserRouter>
        <Routes>
          <Route path="login" element={<HomePage/>}/>
          {/* <Route exact path='/' element={<PrivateRoutes/>}>
            <Route exact path='home' element={<HomePage/>}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;