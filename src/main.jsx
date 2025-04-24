import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css';


createRoot(document.getElementById('root')).render(
  //Ayuda a determinar que todo funcione como esperamos
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
);
