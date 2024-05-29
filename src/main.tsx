import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//i18next
import './i18n.tsx';
import i18n from './i18n.tsx';
import { I18nextProvider } from 'react-i18next';
//CSS
import './index.css';
//PostHog
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

//Inizializzazione PostHog
posthog.init('phc_p8H2QEJdaE1ylvJQE933Ade02wMKvQUYSFh5auY5LIA', {
  api_host: 'https://eu.i.posthog.com',
  persistence: 'memory',
  capture_pageview: false,
  autocapture: false,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PostHogProvider client={posthog}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </PostHogProvider>
);
