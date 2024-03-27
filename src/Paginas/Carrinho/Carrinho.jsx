import CardProdutoCarrinho from "../../Components/Cards/CardProdutoCarrinho";
import { Checkbox } from "@material-tailwind/react";
import TituloLinha from "../../Components/TituloLinha/TituloLinha";
import Header from "../../Components/Headers/Header";
import Footer from "../../Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faTicket, } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";

const Carrinho = () => {

    const [cupom, setCupom] = useState(false);

    return (
        <>
            <Header />
            <TituloLinha titulo={"Minha sacola"} />
            <div className="font-poppins text-preto px-20 pb-8 flex flex-row justify-between">

                <div className="border-cinza border-[1px] rounded-lg p-7 w-[67%] h-fit">
                    <h5 className="text-md font-bold">Produtos</h5>
                    <button className="text-sm text-cinza-escuro underline font-semibold">Limpar sacola</button>

                    <div className="flex flex-col gap-12 pt-4">
                        <CardProdutoCarrinho />
                        <CardProdutoCarrinho />
                        <CardProdutoCarrinho />
                        <CardProdutoCarrinho />
                        <CardProdutoCarrinho />
                    </div>
                </div>

                <div className="bg-terciaria w-[29%] h-fit rounded-lg p-6 flex flex-col gap-6">
                    <h3 className="text-md font-bold">Sumário</h3>

                    <div className="flex flex-row justify-between">
                        <h6 className="text-sm font-medium">Subtotal</h6>
                        <p className="text-sm">R$47,00</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-sm font-medium">Cupons</h6>
                        <p className="text-xs">Clique no botão abaixo e escolha um cupom de desconto</p>
                        <button onClick={() => setCupom(!cupom)} className="hover:bg-verde-hover duration-500 bg-secundaria w-full rounded-lg py-1 text-sm">Cupons</button>

                        {cupom && (
                            <div className="flex flex-col bg-branco rounded-lg py-5 gap-5 px-3 border-[1px] border-cinza duration-500">
                                <div className="flex flex-row justify-between items-center">
                                    <FontAwesomeIcon icon={faTruckFast} style={{ color: "#369B34", }} />
                                    <div>
                                        <p className="text-xs font-regular">Cupom de frete grátis - <span className="font-semibold">”FreteFree”</span></p>
                                        <p className="text-[10px] text-cinza">Válido para compras de até R$20,00</p>
                                    </div>
                                    <Checkbox className="h-3 w-3 rounded-full checked:bg-primaria checked:border-none" />
                                </div>

                                <div className="h-[1px] bg-cinza"></div>

                                <div className="flex flex-row justify-between items-center">
                                    <FontAwesomeIcon icon={faTicket} style={{ color: "#369B34", }} />
                                    <div>
                                        <p className="text-xs font-regular">Cupom de frete grátis - <span className="font-semibold">”FreteFree”</span></p>
                                        <p className="text-[10px] text-cinza">Válido para compras de até R$20,00</p>
                                    </div>
                                    <Checkbox className="h-3 w-3 rounded-full checked:bg-primaria checked:border-none" />
                                </div>
                            </div>
                        )}


                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between">
                            <h6 className="text-sm font-medium">Descontos</h6>
                            <p className="text-sm">R$10,90</p>
                        </div>
                        <div className="h-[1px] bg-cinza"></div>
                        <div className="flex flex-row justify-between">
                            <h6 className="text-sm font-medium">Total</h6>
                            <p className="text-sm">R$36,10</p>
                        </div>
                        <div className="h-[1px] bg-cinza"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6 className="text-sm font-medium">Calcule seu frete</h6>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-cinza-escuro font-medium">Informe seu CEP</p>
                            <div className="flex flex-row gap-4">
                                <input type="number" placeholder="_____-___" className='focus:outline-none border-1 border-cinza-escuro w-full font-regular text-sm px-3 py-1.5 rounded-lg' />
                                <button className="hover:bg-verde-hover duration-700 bg-secundaria rounded-lg text-xs px-6">Calcular</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center">
                                <Checkbox className="h-4 w-4 rounded-md checked:bg-primaria checked:border-none" />
                                <h6 className="text-sm font-medium">Sedex</h6>
                            </div>
                            <p className="text-sm">R$22,90</p>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center">
                                <Checkbox className="h-4 w-4 rounded-md checked:bg-primaria checked:border-none" />
                                <h6 className="text-sm font-medium">Pac normal</h6>
                            </div>
                            <p className="text-sm">R$12,90</p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
export default Carrinho;