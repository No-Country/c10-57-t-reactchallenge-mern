import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { RegisterCL } from "./page/RegisterCL/RegisterCL";
import { UserProvider } from "./context/UserProvider";
import { HomeCL } from "./page/HomeCL/HomeCL";
import { DashboardCL } from "./page/DashboardCL/DashboardCL";
import { Products } from "./page/DashboardCL/Products/Products";
import { Category } from "./page/DashboardCL/Category/Category";
import { Characteristic } from "./page/DashboardCL/Characteristic/Characteristic";
import { Users } from "./page/DashboardCL/Users/Users";
import { Discover } from "./page/Discover/Discover";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeCL />} />
            <Route path="Dashboard" element={<DashboardCL />}>
              <Route index element={<Users />} />
              <Route path="Products" element={<Products/>} />
              <Route path="Category" element={<Category/>} />
              <Route path="Characteristic" element={<Characteristic/>} />
            </Route>
            <Route path="Discover" element={<Discover />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
