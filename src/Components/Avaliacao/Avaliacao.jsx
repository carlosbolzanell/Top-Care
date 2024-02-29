import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

const Avaliacao = () => {
    return (
                // div principal
                <div className='flex flex-row px-20 font-poppins'>
                <div className='flex flex-row bg-branco gap-2 shadow-md p-4 rounded-lg w-full items-start'>
                    {/* div da foto */}
                    <div className=''>
                        <img className='rounded-full w-[80%]' src="./public/assets/gato.png" />
                    </div>
    
                    {/* div do conteudo */}
                    <div className='w-full'>
    
                        {/* div do nome + estrelas */}
                        <div className='flex flex-row justify-between py-2'>
                            <p className='pl-2 font-regular text-sm text-preto'>Karoliny Cieply</p>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                            </div>
                        </div>
                        {/* div da linha */}
                        <div className='h-[1px] bg-preto w-full'>
    
                        </div>
    
                        {/* div do texto */}
                        <div className='conteudo'>
                            <p className='pl-2 py-2 font-regular text-sm text-preto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi odio ea facere vero. Ea, necessitatibus illum laborum nihil labore reprehenderit sed cum, esse itaque, expedita pariatur. Laboriosam, sunt hic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Avaliacao;