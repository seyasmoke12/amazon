import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import './index.css'
import {reducer,initialState} from "./utility/reducer"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
