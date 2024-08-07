import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-10">Контент главной страницы</div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)