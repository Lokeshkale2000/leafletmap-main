// src/App.js
import React from 'react';
import './App.css';

import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent';

function App() {
  return (
    <div className="App">
      <h1>Map search of marker using leaflet</h1>
 <MapComponent></MapComponent>
    </div>
  );
}

export default App;
