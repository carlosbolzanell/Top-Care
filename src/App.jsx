import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardPet from './Components/CardPet'
import CardProduto from './Components/CardProduto'
import CardProdutoFavorito from './Components/CardProdutoFavorito'
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

function App() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <>
      <div className='bg-branco'>

        <Header />
        <Carrossel titulo={"Produtos"}/>
        <Carrossel titulo={"Bem avaliados"}/>
        <Footer />
      </div>

    </>
  )
}
export default App;
