const BotaoMedio = (props) => {
    return(
        <button className=" w-[15%] h-[8%] bg-primaria rounded-lg hover:bg-violet-500 transition duration-700">
            <text className=" font-poppins text-preto text-xl font font-bold hover:text-branco transition duration-100 ">{props.texto}</text>
        </button>
    )
} 
export default BotaoMedio;