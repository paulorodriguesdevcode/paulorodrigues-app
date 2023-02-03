import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes ,Route } from 'react-router-dom';

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Route path='/baba' element={<App/>} />
  </React.StrictMode>,
)
