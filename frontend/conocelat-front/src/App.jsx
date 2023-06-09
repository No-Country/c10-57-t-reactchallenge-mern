import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { RegisterCL } from "./page/RegisterCL/RegisterCL";
import { UserProvider } from "./context/UserProvider";
import { HomeCL } from "./page/HomeCL/HomeCL";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { DashboardCL } from "./page/DashboardCL/DashboardCL";
import { Products } from "./page/DashboardCL/Products/Products";
import { Category } from "./page/DashboardCL/Category/Category";
import { Characteristic } from "./page/DashboardCL/Characteristic/Characteristic";
import { Users } from "./page/DashboardCL/Users/Users";
import { Discover } from "./page/Discover/Discover";
import { ProductList } from "./components/ProductList/ProductList";
import { checkAuth } from "./checkAuth/checkAuth";
import { useSelector } from "react-redux";
import { BookingCL } from "./page/BookingCL/BookingCL";

function App() {
  const dataUser = useSelector((state) => state.auth);
  checkAuth();
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
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
                  <Route path="Booking" element={<BookingCL/>}/>
                  <Route index element={<HomeCL />} />
                  <Route path="/category/:categoryId" element={<ProductList />} />
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
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
