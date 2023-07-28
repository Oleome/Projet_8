import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header/header';
import Footer from './layout/Footer/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
