import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

const Avaliacao = () => {
    return (
        <div className='w-full px-20 font-poppins'>
            <div className='flex flex-row items-center bg-branco gap-4 shadow-lg p-4 rounded-lg'>

                <div>
                    <img className='rounded-full w-[70px]' src="./public/assets/gato.png" />
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <div className='flex flex-row justify-between'>
                            <p className='pl-2 py-2 font-regular text-sm text-preto'>Karoliny Cieply</p>
                            <div className='flex gap-1'>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                            </div>
                        </div>

                        <div className='bg-preto h-[1px] w-[100%]'></div>
                    </div>
                    <p className='pl-2 py-2 font-regular text-sm text-preto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in repudiandae omnis autem nostrum deserunt enim, natus, molestias, suscipit vitae quaerat. Harum officiis iusto ullam laudantium minima quibusdam excepturi iure.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Avaliacao;