import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardProduto from './Components/CardProduto'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeaderLogado from './Components/HeaderLogado'

function App() {

  return (
    <>
    <div className='flex flex-col gap-6 bg-branco'>
        <HeaderLogado />

      <Avaliacao/>
    </div>

    </>
  )
}

export default App
