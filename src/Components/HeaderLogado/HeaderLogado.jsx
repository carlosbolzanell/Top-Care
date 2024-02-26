import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser,} from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, } from '@fortawesome/free-solid-svg-icons'

const HeaderLogado = () => {
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


            <div className='flex flex-row gap-6 w-[33%] justify-end'>
                <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#322828",}} />    
                <FontAwesomeIcon icon={faBagShopping} size="xl" style={{color: "#322828",}} />        
                <FontAwesomeIcon icon={faUser} size="xl"  style={{color: "#322828",}} />     
            </div>
        </div>
    )
}
export default HeaderLogado;