import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'services/client.tsx',
      'pages/SignupPage.tsx',
      'pages/SigninPage.tsx',
      'pages/ProductPage.tsx',
      'components/ModalUsage.tsx',
      'components/ModalSettings.tsx',
      'components/ModalResetPassword.tsx',
      'components/ModalLogout.tsx',
      'components/ModalConfirmAccount.tsx',
      'components/AccesBox.tsx'
    ],
  },
});
