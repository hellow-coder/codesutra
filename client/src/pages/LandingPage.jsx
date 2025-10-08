// import { Layout} from 'lucide-react'
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./authPages/Login"
// import ForgetPassword from "./authPages/ForgetPassword"
// import Register from "../pages/authPages/Register"
// const LandingPage = () => {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Register/>} />
//         <Route path="/forget-password" element={<ForgetPassword />} />
//       </Routes>
//     </Layout>
//   )
// }

// export default LandingPage




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./authPages/Login";


// import Navbar from "../components/Layout/Navbar";
// import Footer from "../components/Layout/Footer";
// import UserMain from "../components/Landing/UserMain";
// import Developer from "../components/Landing/Developer";
// import Explore from "../components/Landing/Explore";
// import Feature from "../components/Landing/Feature";
// import Primium from "../components/Landing/Primium";
// import Login from "./authPages/Login";
// const LandingPage = () => {
//   return (
//     <div>
//         <Navbar/>
//     <Router>
//         <Routes>
//           <Route path="/" element={<UserMain/>} />
//           <Route path="/login" element={<Login />} />
          
//         </Routes>
    
//     </Router>
//     <Footer/>
//     </div>
//   );
// };

// export default LandingPage;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import UserMain from "../components/Landing/UserMain";
import Developer from "../components/Landing/Developer";
import Explore from "../components/Landing/Explore";
import Feature from "../components/Landing/Feature";
import Primium from "../components/Landing/Primium";
import Login from "./authPages/Login";

const LandingPage = () => {
  return (
    <div>
     
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<UserMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/primium" element={<Primium />} />
        </Routes>
         <Footer />
      </Router>
     
    </div>
  );
};

export default LandingPage;