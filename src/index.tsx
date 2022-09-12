import 'antd/dist/antd.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Toast from './components/layout/Toast/Toast';
import { store } from './store/store';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  </BrowserRouter>,
);
