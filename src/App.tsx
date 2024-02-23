import React, { useState, useEffect } from 'react';
import './App.css';
import Spinner from './components/spinner';
import SideNav from './components/sidenav';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
    </div>
  );
};

export default App;
