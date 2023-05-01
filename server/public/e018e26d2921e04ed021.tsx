import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './styles/tailwind.css';
import { jsx as _jsx } from "react/jsx-runtime";
const root = createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/_jsx(Provider, {
  store: store,
  children: /*#__PURE__*/_jsx(App, {})
}));