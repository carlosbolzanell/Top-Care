<<<<<<< HEAD
import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardProduto from './Components/CardProduto'
import EscreverAvaliacao from './Components/EscreverAvaliacao'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeaderLogado from './Components/HeaderLogado'

function App() {

  return (
    <>
    <div className='flex flex-col gap-6 bg-branco'>
        <HeaderLogado />

        <Avaliacao/>

        <EscreverAvaliacao/>
    </div>

    </>
  )
=======
import CadastroPet from './components/pop-up/CadastroPet'
import Select from './components/Select/Select'
function App() {

  return (
      <div className="h-screen flex justify-center items-center flex-col gap-10">
        <CadastroPet />
      </div>
      )
>>>>>>> origin/carlos
}

      export default App;
