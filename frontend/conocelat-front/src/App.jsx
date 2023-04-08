import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from './layout/Footer/Footer';
import { MainConoceLat } from './page/MainConoceLat/MainConoceLat';
import { Layout } from "./layout/Layout";
import { LoginCL } from "./page/LoginCL/LoginCL";
import { RegisterCL } from "./page/RegisterCL/RegisterCL";
import { UserProvider } from "./context/UserProvider";
import { HomeCL } from "./page/HomeCL/HomeCL";

function App() {
  return (

    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomeCL/>}/>
              <Route path="login" element={<LoginCL/>}/>
              <Route path="Register" element={<RegisterCL/>}/>
            </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App
