import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "remixicon/fonts/remixicon.css"

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = ({children}) => (
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
    element: <App></App>
  },
  {
    path: '/product/:id',
    element: <App><PDPContent /></App>
  }
])
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<RouterProvider router={router} />)