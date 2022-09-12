import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast: FC = () => {
  return <ToastContainer autoClose={2000} limit={3} />;
};

export default Toast;
