import React from 'react'
import Layout from './pages/Layout'
// import { Route, Routes } from 'react-router-dom'
import {About,Blogs,Blog,Contact,HomePage,Products,Random,Details,All,NotFound,Blog2} from "./pages"
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  children:[
      {index:true,element:<HomePage/>},
      {path:'about',element:<About/>},
      {path:'blogs',element:<Blogs/>,children:[
        {path:'blog', element:<Blog/>},
        {path:'blog2',element:<Blog2/>}
      ]},
      {path:'contacts',element:<Contact/>},
      {path:'products',element:<Products/>,children:[
        {path:':random',element:<Random/>,children:[
          {path:'details',element:<Details/>,children:[
            {path:':all',element:<All/>}
          ]}
        ]}
      ]},
      {path:'*',element:<NotFound/>}
  ]
 }
])
const App = () => {
  return <RouterProvider router={router}/>
  // return (
    // <div>
      {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}>
          <Route path='/blogs/blog' element={<Blog/>}/>
          <Route path='/blogs/blog2' element={<Blog2/>}/>
        </Route>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:random' element={<Random/>}/>
        <Route path='/products/:random/details' element={<Details/>}/>
        <Route path='/products/:random/details/:all' element={<All/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    // </div>
  // )
}

export default App
