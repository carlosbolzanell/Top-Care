import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardPet from './Components/Cards/CardPet'
import CardProduto from './Components/Cards/CardProduto'
import CardProdutoFavorito from './Components/Cards/CardProdutoFavorito'
import Carrossel from './Components/Carrossel'
import EscreverAvaliacao from './Components/EscreverAvaliacao'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeaderLogado from './Components/HeaderLogado'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import CardProdutoCarrinho from './Components/Cards/CardProdutoCarrinho'
import Carrinho from './Components/Carrinho'

function App() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <>
      <div className='bg-branco flex flex-col gap-6'>

        <Header />
        {/* <Carrossel titulo={"Produtos"}/> */}
        <Carrinho />
        <Footer />
      </div>

    </>
  )
}
export default App;
