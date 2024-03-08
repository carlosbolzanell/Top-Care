import CardProdutoCarrinho from "../Cards/CardProdutoCarrinho";

const Carrinho = () => {
    return (
        <div className="font-poppins text-preto px-20 flex flex-row justify-between">

            <div className="border-cinza border-[1px] rounded-lg p-7 w-[67%]">
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

            <div className="bg-terciaria w-[28%] rounded-lg p-6 flex flex-col gap-6">
                <h3 className="text-md font-bold">Sumário</h3>

                <div className="flex flex-row justify-between">
                    <h6 className="text-sm font-medium">Subtotal</h6>
                    <p className="text-sm">R$47,00</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h6 className="text-sm font-medium">Cupons</h6>
                    <p className="text-xs">Clique no botão abaixo e escolha um cupom de desconto</p>
                    <button className="bg-secundaria w-full rounded-lg py-1 text-sm">Cupons</button>
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

            </div>

        </div>
    )
}
export default Carrinho;