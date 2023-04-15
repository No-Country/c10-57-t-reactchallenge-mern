import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./layout/Footer/Footer";
import { Layout } from "./layout/Layout";
import { LoginCL } from "./page/LoginCL/LoginCL";
import { RegisterCL } from "./page/RegisterCL/RegisterCL";
import { UserProvider } from "./context/UserProvider";
import { HomeCL } from "./page/HomeCL/HomeCL";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


function App() {

  const queryClient = new QueryClient()



  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeCL />} />
            <Route path="login" element={<LoginCL />} />
            <Route path="Register" element={<RegisterCL />} />
          </Route>
        </Routes>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
