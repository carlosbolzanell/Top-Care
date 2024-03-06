import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faStar, faBagShopping, } from '@fortawesome/free-solid-svg-icons'

const CardProduto = () => {
    return (
        <div className='flex flex-col gap-3 border-cinza border-[1px] rounded-lg w-[11rem] h-[16.6rem] font-poppins px-2 py-3'>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                    <p className='text-xs font-medium text-cinza-escuro'>4,2</p>
                </div>

                <FontAwesomeIcon icon={faHeart} style={{ color: "#4f4f4f", }} />
            </div>

            <div className='flex flex-col items-center'>
                <h4 className='text-base font-medium text-preto '>Ração Pedgree</h4>
                <img src='./assets/racao.png' />
                <h5 className='text-xs font-medium text-cinza-escuro'><span className='line-through'>R$170,00 </span><span className='text-[11px]'>-16%</span></h5>
                <h5 className='font-semibold text-preto'>R$142,80</h5>
            </div>

            <div className='flex flex-row gap-1 justify-between'>
                <button className='transition ease-in-out delay-150 duration-200 text-xs font-medium bg-secundaria rounded-lg w-[76%] h-7 hover:bg-[#6F8337] hover:text-branco'>Comprar agora</button>
                <button className='bg-primaria rounded-lg w-[24%]'><FontAwesomeIcon icon={faBagShopping} style={{ color: "#322828", }} /></button>
            </div>
        </div>
    )
}
export default CardProduto;