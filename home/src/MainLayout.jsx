import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import "remixicon/fonts/remixicon.css"

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = ({children}) => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      {children}
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomeContent /></MainLayout>
  },
  {
    path: '/product/:id',
    element: <MainLayout><PDPContent /></MainLayout>
  },
  {
    path: '/cart',
    element: <MainLayout><CartContent /></MainLayout>
  }
])

export default function App() {
    return <RouterProvider router={router} />
}