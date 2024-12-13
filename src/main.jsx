import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import BgcolorChanger from './BgcolorChanger'
// import PasswordGenerator from './Passwordgenerator'
// import App from './MiniContext/App'
import App from './Themeswitcher/App'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BgcolorChanger /> */}
    {/* <PasswordGenerator /> */}
    <App/>
    <App />
   
  </StrictMode>,
)
