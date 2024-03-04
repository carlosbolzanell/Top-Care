const BotaoMedio = (props) => {
    return(
        <button className=" w-[14%] min-w-32 h-[8%] text-preto bg-primaria rounded-lg hover:bg-violet-500 transition duration-500 hover:text-branco transition duration-100">
            <p className=" font-poppins text-xl font font-bold">{props.texto}</p>
        </button>
    )
} 
export default BotaoMedio;