import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import InventoryForm from './components/InventoryForm';
import Navigation from './components/Navigation';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/items" element={<InventoryList />} />
          <Route path="/items/add" element={<InventoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
