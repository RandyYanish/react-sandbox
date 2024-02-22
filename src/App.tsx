import React, { useState, useEffect } from 'react';
import './App.css';
import Spinner from './components/spinner';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Spinner loading={loading} />

  return (
    <div className='text-2xl'>Loaded...</div>
  )
}

export default App;
