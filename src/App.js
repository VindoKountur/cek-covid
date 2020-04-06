import React from 'react';
import './css/main.css';

import { DataProvider } from "./context/DataContext";
import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Footer } from "./components/Footer";
import { Data } from "./components/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Status />
        <Data />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
