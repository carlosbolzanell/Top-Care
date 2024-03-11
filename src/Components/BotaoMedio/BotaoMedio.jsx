const BotaoMedio = ({texto}) => {
    return(
        <button className="w-[12%] h-10 text-preto font-poppins text-lg font-bold bg-primaria rounded-lg hover:bg-violet-500 transition duration-500 hover:text-branco">
            {texto}
        </button>
    )
} 
export default BotaoMedio;