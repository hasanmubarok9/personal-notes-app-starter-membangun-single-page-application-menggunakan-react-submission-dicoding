import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Aplikasi Catatan</h1>
        <Navigation />
      </header>
    </div>
    <main>
      <Routes>
        <Route path="/" elements={<HomePage />} />
        <Route path="/add" elements={<AddPage />} />
      </Routes>
    </main>
  );
}

export default App;
