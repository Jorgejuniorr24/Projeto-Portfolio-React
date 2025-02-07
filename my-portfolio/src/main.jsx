<<<<<<< HEAD
import './app.css'; // Importando apenas uma vez
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
>>>>>>> e3f6800 (Ajustando posição da imagem e organização dos botões)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<<<<<<< HEAD
  </StrictMode>
);
=======
  </StrictMode>,
)
>>>>>>> e3f6800 (Ajustando posição da imagem e organização dos botões)
