import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const CardProdutoCarrinho = () => {
    const [quantidade, setQuantidade] = useState(1)

    const aumentar = () => {
        setQuantidade(quantidade + 1)
    }

    const diminuir = () => {
        if((quantidade - 1) <= 0) {
            setQuantidade(1)
        } else {
           setQuantidade(quantidade - 1) 
        }
        
        
    }
    return (
        <div className="text-preto font-poppins flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <Checkbox className="h-[1.3] w-[1.3rem] rounded-md checked:bg-secundaria checked:border-none" />
                <img src="./assets/racao.png" className="w-[60px]" />
                <div>
                    <p className="text-sm">Ração úmida Sache Atum Ao Molho Para Gatos</p>
                    <p className="text-xs">Adultos - 85g</p>
                </div>
            </div>

            <div className="flex flex-col items-center px-4">
                <p className="text-sm font-medium">Quantidade</p>

                <div className="flex flex-row items-center gap-[0.4rem]">
                    <button className="bg-secundaria w-6 h-6 rounded-md" onClick={diminuir}>-</button>
                    <p className="flex items-center justify-center text-sm font-light p-2 border-cinza border-[1px] rounded-md w-8 h-8">{quantidade}</p>
                    <button className="bg-secundaria w-6 h-6 rounded-md" onClick={aumentar}>+</button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm font-medium">Preço</p>
                <p className="text-sm">R$3,00</p>
            </div>

        </div>
    )
}
export default CardProdutoCarrinho;