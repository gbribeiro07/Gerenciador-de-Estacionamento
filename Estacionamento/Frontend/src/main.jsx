import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import App from "./App.jsx";
import AddScreen from "./App";
import { ListScreen } from "./App";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AddScreen />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/AddScreen" />} />

        <Route path="/AddScreen" element={<AddScreen />} />
        <Route path="/ListCars" element={<ListScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
