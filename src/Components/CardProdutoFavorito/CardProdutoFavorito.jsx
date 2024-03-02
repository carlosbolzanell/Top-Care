import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingBag, } from '@fortawesome/free-solid-svg-icons'

const CardProdutoFavorito = () => {
    return (
        <div className='flex flex-row gap-2 items-center justify-between font-poppins bg-branco rounded-lg shadow-lg w-[80%] h-[120px]'>
            <div className='flex flex-row gap-2 items-center'>
                <div>
                    <img className='w-[90%]' src='./public/assets/produto-shampoo.png' />
                </div>
                <div>
                    <h5 className='font-regular text-md text-preto'>Kit para banho cachorro- shampoo e condicionador</h5>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='font-bold text-md text-preto'>R$45,00</p>
                        <p className='font-regular text-sm text-cinza-escuro'>R$55,00</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-12 p-8'>
                <FontAwesomeIcon icon={faShoppingBag} size="xl" style={{ color: "#322828", }} />
                <FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "#C9E47B", }} />
            </div>
        </div>
    )
}
export default CardProdutoFavorito;