import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import AuthProvider from './providers/AuthProvider';

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<Navigate to='/auth' replace />} />
      </Routes>
    </>
  );
};

export default Router;
