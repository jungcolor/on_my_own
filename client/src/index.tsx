import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

import './styles/tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
