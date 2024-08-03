import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componts/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './componts/Home/Home';
import About from './componts/about/About';
import Contact from './componts/contact/Contact';
import Portflio from './componts/portflio/Portflio';



let x = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      { index: true, element:<Home/>  },
       {path :"about",element:<About/>}, 
       {path :"contact",element:<Contact/> }, 
       {path :"portflio",element:<Portflio /> }, 

      //  {path:"*", element:} 
    ],
  },
]);
function App() {
  return<RouterProvider router={x}></RouterProvider>;
  
}


export default App
