import React, { useState } from 'react';
import './App.css';
import SubscribeForm from './SubscribeForm';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Genotek Expansion Joint Covers</h1>
      </header>

      <section className="App-section">
        <h1>Welcome to Genotek</h1>
        <p>Discover our high-quality expansion joint covers for the construction industry.</p>

        <SubscribeForm />
      </section>
    </div>
  );
}

export default App;
  