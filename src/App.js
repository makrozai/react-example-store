import React from 'react'

/**Import of components */
import Router from './components/Router'

function App() {
  console.log(process.env.REACT_APP_NOT_SECRET_CODE)
  return (
    <div className="contenedor">
      <Router />
    </div>
  )
}

export default App;
