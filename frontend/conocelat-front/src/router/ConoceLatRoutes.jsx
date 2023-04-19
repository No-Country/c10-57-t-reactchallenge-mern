import { Route, Routes } from "react-router-dom";
import { DashboardCL } from "../page/DashboardCL/DashboardCL";
import { Users } from "../page/DashboardCL/Users/Users";
import { Products } from "../page/DashboardCL/Products/Products";
import { Category } from "../page/DashboardCL/Category/Category";
import { Characteristic } from "../page/DashboardCL/Characteristic/Characteristic";

export const ConoceLatRoutes = () => {
    return (
      <Routes>
        <Route path="Dashboard" element={<DashboardCL />}>
          <Route index element={<Users />} />
          <Route path="Products" element={<Products/>} />
          <Route path="Category" element={<Category/>} />
          <Route path="Characteristic" element={<Characteristic/>} />
        </Route>
      </Routes>
    );
  };
  