import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import ProductsFilter from "./components/ProductsFilter/ProductsFilter";
import Footer from "./components/Footer/Footer";
import * as ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: 'plp',
          element: <ProductListingPage />,
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <div>
    //   {/* <Navbar /> */}
    //   {/* <LandingPage /> */}
    //   {/* <ProductsFilter /> */}
    //   {/* <ProductListingPage /> */}
    // </div>
  );
}

export default App;
