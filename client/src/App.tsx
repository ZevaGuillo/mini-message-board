import { useState } from 'react'
import { GlobalStyle } from './theme/GlobalStyle'
import Board from './components/Board'

function App() {

  return (
    <main className="App">
      <GlobalStyle/>
      <h1>Mini Message Board</h1>
      <Board/>
    </main>
  )
}

export default App
