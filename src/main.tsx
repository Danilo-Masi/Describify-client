// React
import ReactDOM from 'react-dom/client'
// CSS
import './index.css';
// Components
import App from './App.tsx'
// i18next
import './i18n.tsx';
import i18n from './i18n.tsx';
import { I18nextProvider } from 'react-i18next';
// Vercel
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <App />
    <SpeedInsights />
  </I18nextProvider>
);
