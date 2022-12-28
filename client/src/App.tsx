import { useState } from 'react'
import { GlobalStyle } from './theme/GlobalStyle'
import Board from './components/Board'
import SendMessage from './components/SendMessage'

function App() {

  return (
    <main className="App">
      <GlobalStyle/>
      <h1>Mini Message Board</h1>
      <Board/>
      
      <SendMessage/>
    </main>
  )
}

export default App
