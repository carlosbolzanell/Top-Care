const CartoesSalvos = () => {
    return (
        <div className="bg-branco flex flex-row items-center">
            <div className="flex flex-col pr-20">
                <p>Cartão de crédito</p>
                <p>Kristian Erdmann</p>
            </div>
            <div className="">
                <p>Validade 12/28</p>
                <p>Final 9875</p>
            </div>  
            <img src="./assets/logo-mastercard.png" className="px-10" alt="Mastercard Logo" />
            <button className="bg-primaria rounded-full w-8 h-8 font-bold">+</button>
        </div>
    );
}

export default CartoesSalvos;
