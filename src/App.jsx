import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Aplikasi Catatan</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/:name" element={<HomePage /> } />
          <Route path="/add" element={<AddPage /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
