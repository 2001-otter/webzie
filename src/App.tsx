import React from 'react';
import { Switch } from 'react-router-dom';

import './App.css';
import Landing from './components/Landing/Landing';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing></Landing>
      </Layout>
    </div>
  );
}

export default App;
