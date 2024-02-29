import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

const EscreverAvaliacao = () => {
    return (
        // div principal
        <div className='flex flex-row px-20 font-poppins'>
            <div className='flex flex-row bg-terciaria gap-2 shadow-lg p-4 rounded-lg w-full items-start'>
                {/* div da foto */}
                <div className=''>
                    <img className='rounded-full w-[80%]' src="./public/assets/gato.png" />
                </div>

                {/* div do conteudo */}
                <div className='w-full'>

                    {/* div do nome + estrelas */}
                    <div className='flex flex-row justify-between py-2'>
                        <p className='pl-2 font-regular text-sm text-preto'>Karoliny Cieply</p>

                    </div>
                    {/* div da linha */}
                    <div className='h-[1px] bg-preto w-full'>

                    </div>

                    {/* div do texto */}
                    <div className='flex flex-col items-center'>
                        <p className='pl-2 py-2 font-regular text-xs text-cinza-escuro'>
                            Deixe sua avaliação aqui também!
                        </p>
                        <div>
                            <div>
                                <input placeholder='Digite sua avaliação' className='font-regular text-xs p-2 rounded-lg'>
                                </input>
                            </div>
                            <a href=''></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EscreverAvaliacao;