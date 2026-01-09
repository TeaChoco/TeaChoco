//-Path: "TeaChoco-Portfolio/client/src/entry-client.tsx"
import './i18n/i18n';
import './index.css';
import App from './router/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename="/TeaChoco">
            <App />
        </BrowserRouter>
    </StrictMode>,
);
