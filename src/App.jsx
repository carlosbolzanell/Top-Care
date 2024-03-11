import { useState } from 'react'
import Avaliacao from './Components/Avaliacao'
import CardPet from './Components/Cards/CardPet'
import CardProduto from './Components/Cards/CardProduto'
import CardProdutoFavorito from './Components/Cards/CardProdutoFavorito'
import Carrossel from './Components/Carrossel'
import EscreverAvaliacao from './Components/EscreverAvaliacao'
import Footer from './Components/Footer'
import Header from './Components/Headers/Header'
import HeaderLogado from './Components/Headers/HeaderLogado'
import CardProdutoCarrinho from './Components/Cards/CardProdutoCarrinho'
import FotoPet from './Components/Cards/FotoPet'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Carrinho from './Paginas/Carrinho'

function App() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);  


  return (
    <>
      <div className='bg-branco flex flex-col gap-6'>

        <Carrinho/>
      </div>

    </>
  )
}
export default App;
