import Layout from './Pages/Layout'
import Products from './Pages/Products'
import ProductsDetail from './Pages/ProductsDetail'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
const route = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,
    children: [
       {index:true, element:<Products/>},
       {path:':id', element: <ProductsDetail />}
    ]
  }
])
const App = () => {
  return (
   <>
   <ToastContainer position="bottom-right" />
   <RouterProvider router={route}/>
   </> 
   );
}

export default App
