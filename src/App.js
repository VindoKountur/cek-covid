import React from 'react';
import './css/main.css';
import { RectGraduallyShowLoading } from 'react-loadingg';

import { DataProvider } from './context/DataContext';
import { Header } from './components/Header';
import { Status } from './components/Status';
import { Footer } from './components/Footer';
import { Data } from './components/Data';

function App() {
  const loading = (
    <div style={{ position: 'relative', padding: '50px', textAlign: 'center' }}>
      <RectGraduallyShowLoading
        color={'#FFF'}
        size={'small'}
        style={{ display: 'block', margin: 'auto' }}
      />
      <p style={{ marginTop: '10px', color: '#fff' }}>Getting Data ...</p>
    </div>
  );

  return (
    <div className='App'>
      <Header />
      <DataProvider>
        <Status loading={loading} />
        <Data loading={loading} />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
