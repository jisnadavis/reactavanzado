import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appprovider } from './Appprovider/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Appprovider>
    <App />
  </Appprovider>
)
