import React from "react";
import { Routes, Route,} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Products from "./pages/Prdoucts";
import AddProducts from "./pages/AddProducts";
import StockIn from "./pages/StockIn";
import AddStock from "./pages/AddStock";
import Materials from "./pages/Materials";
import Login from "./pages/AdminLogin/Login";
import AddMaterial from "./pages/AddMaterial";
import Reports from "./pages/Reports";
import ViewReport from "./pages/ViewReport";
import Slip from "./pages/Slip";
import Profit from "./pages/Profit";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="products" element={<Products />} />
      <Route path="add-products" element={<AddProducts/>} />
      <Route path="add-stock" element={<AddStock />} />
      <Route path="stock-in" element={<StockIn/>} />
      <Route path="materials" element={<Materials/>} />
      <Route path="add-materials" element={<AddMaterial/>} />
      <Route path="reports" element={<Reports/>} />
      <Route path="view-report/:id" element={<ViewReport/>} />
      <Route path="slip/:id" element={<Slip/>}/>
      <Route path="profit" element={<Profit/>}/>
      
    </Routes>
  );
};

export default App;
