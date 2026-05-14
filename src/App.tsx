import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@config/routes';
import LoadingScreen from '@components/common/LoadingScreen';

const App: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
