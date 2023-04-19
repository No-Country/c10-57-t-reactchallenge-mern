import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { ProductList } from "./components/ProductList/ProductList";
import { checkAuth } from "./checkAuth/checkAuth";
import { PublicRoute } from "./router/PublicRoute";
import { PrivateRoute } from "./router/PrivateRoute";
import { useSelector } from "react-redux";
import { ConoceLatRoutes } from "./router/ConoceLatRoutes";
import { HomeLoggedIn } from "./page/HomeCL/HomeLoggedIn";
import { HomeRoutes } from "./router/HomeRoutes";

function App() {
  const dataUser = useSelector((state) => state.auth);
  checkAuth();
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>

            {
              dataUser.status==="authenticated"?(
                <>
                  <Route path="Dashboard" element={<DashboardCL />}>
                    <Route index element={<Users />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Category" element={<Category />} />
                    <Route path="Characteristic" element={<Characteristic />} />
                  </Route>
                  <Route index element={<HomeCL />} />
                </>
                  
              ):(
                <>
                  <Route index element={<HomeCL />} />
                  <Route path="/category/:categoryId" element={<ProductList />} />
                  <Route path="/*" element={<Navigate to="/" replace />} />
                </>
                // <Route path="/category/:categoryId" element={<ProductList />} />
              )
            }
            {/* <Route index element={<HomeCL />} /> */}
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
