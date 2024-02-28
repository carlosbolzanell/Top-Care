import { useState } from 'react'
import BotaoPequeno from './components/BotaoPequeno'
import BarraPesquisa from './components/BarraPesquisa'
import CadastroPet from './components/pop-up/CadastroPet'

function App() {

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
        <CadastroPet />
    </div>
  )
}

export default App
