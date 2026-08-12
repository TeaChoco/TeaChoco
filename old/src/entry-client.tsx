//-Path: "TeaChoco-Portfolio/client/src/entry-client.tsx"
import './index.css';
import App from './App';
import env from './secure/env';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Providers from './components/layout/Providers';

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <StrictMode>
        <Providers>
            <BrowserRouter basename={env.BASE}>
                <App />
            </BrowserRouter>
        </Providers>
    </StrictMode>,
);
