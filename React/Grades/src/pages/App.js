import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';
import Footer from './Footer';

function App() {
  return (
    
      <div className='App'>
        <div style={{ minHeight: '88vh' }}>
          <Landing />
        </div>
        <Footer />
      </div>
    
  );
}

export default App;