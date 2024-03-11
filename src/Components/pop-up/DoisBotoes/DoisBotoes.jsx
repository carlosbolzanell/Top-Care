const PopUpDoisBotoes = ({texto}) => {
    return (
        <div className="font-poppins flex-col justify-center items-center flex bg-terciaria p-10 w-[28%] rounded-lg">
            {texto}
            <div className="flex-row justify-between flex w-[60%]">
            <button className="bg-primaria w-[40%] rounded-lg mt-6 p-1 hover:bg-violet-500 transition duration-500 hover:text-branco">Sim</button>
            <button className="bg-primaria w-[40%] rounded-lg mt-6 p-1 hover:bg-violet-500 transition duration-500 hover:text-branco">Não</button>
            </div>
        </div>
    )
}
export default PopUpDoisBotoes;