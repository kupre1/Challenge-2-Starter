import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
