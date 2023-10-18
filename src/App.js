import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoriesPage from './components/CategoriesPage';
import ActivityAddForm from './components/ActivityAddForm';
import ConfirmationPage from './components/ConfirmationPage';
import "./index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/add/:category" element={<ActivityAddForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
