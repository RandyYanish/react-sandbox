import React from 'react';

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    loading && (
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent bg-opacity-50'>
        <div className='w-16 h-16 border-4 border-t-gray-300 border-blue-500 rounded-full animate-spin'></div>
      </div>
    )
  );
};

export default Spinner;
