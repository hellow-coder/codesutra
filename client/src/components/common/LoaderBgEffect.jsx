
import React from 'react'
import Loader from './Loader'

const LoaderBgEffect = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-[99999]">
      <Loader />
    </div>
  );
};

export default LoaderBgEffect;
