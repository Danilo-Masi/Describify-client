import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//i18next
import './i18n.tsx';
import i18n from './i18n.tsx';
import { I18nextProvider } from 'react-i18next';
//CSS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
