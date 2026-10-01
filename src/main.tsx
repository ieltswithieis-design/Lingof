import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { RuntimeErrorBoundary } from './RuntimeErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RuntimeErrorBoundary>
      <LanguageProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LanguageProvider>
    </RuntimeErrorBoundary>
  </StrictMode>,
);
