import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Form from "./pages/Form.jsx";
import { Routes, Route } from "react-router-dom";
import FormSubmissions from "./pages/FormSubmissions.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submissions" element={<FormSubmissions />} />
      </Routes>
    </>
  );
}

export default App;
