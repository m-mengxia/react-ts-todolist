import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'
import { TodoProvider } from './context'

const app = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
app.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
