const Header = () => {
    return (
        <div className="bg-primaria px-20 py-3 flex flex-row font-poppins justify-between items-center">
            <div className='w-[33%]'>
                <img className="w-[18%]" src="./assets/logo.png"/>
            </div>

            <div className="flex flex-row gap-16 w-[33%] justify-center">
                <a className="hover:underline text-sm" href="#">Produtos</a>
                <a className="hover:underline text-sm" href="#">Serviços</a>
                <a className="hover:underline text-sm" href="#">Lojas</a>
                <a className="hover:underline text-sm" href="#">Pets</a>
                <a className="hover:underline text-sm" href="#">Planos</a>
                <a className="hover:underline text-sm" href="#">Ajuda</a>
            </div>


            <div className='flex flex-row gap-6 items-center w-[33%] justify-end'>
                <button className='bg-terciaria rounded-lg py-1.5 w-[25%]'>Login</button>
                <button className='bg-terciaria rounded-lg py-1.5 w-[25%]'>Cadastro</button>   
            </div>
        </div>
    )
}
export default Header;