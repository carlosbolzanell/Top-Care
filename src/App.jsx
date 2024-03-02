import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardPet from './Components/CardPet'
import CardProduto from './Components/CardProduto'
import CardProdutoFavorito from './Components/CardProdutoFavorito'
import EscreverAvaliacao from './Components/EscreverAvaliacao'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeaderLogado from './Components/HeaderLogado'

function App() {

  return (
    <>
    <div className='flex justify-center items-center w-full h-[500px]'>
        
        
        <CardProdutoFavorito/>
    </div>

    </>
  )
}
export default App;
