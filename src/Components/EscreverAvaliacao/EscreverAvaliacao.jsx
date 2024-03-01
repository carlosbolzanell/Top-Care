import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPaperPlane, } from '@fortawesome/free-regular-svg-icons'
import { Rating } from "@material-tailwind/react";

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
                    <div className='flex flex-col items-center p-3'>
                        <p className='pl-2 py-3 font-regular text-xs text-cinza-escuro'>
                            Deixe sua avaliação aqui também!
                        </p>

                        <div className='w-full flex flex-row justify-center gap-2'>
                            <div className='flex flex-row w-[90%] justify-between gap-1 bg-white border-[1px] border-cinza rounded-lg pr-2'>

                                <input placeholder='Digite sua avaliação' className='focus:outline-none w-full font-regular text-xs p-3 rounded-lg' />
                                <Rating unratedColor="amber" ratedColor="amber" />
                            </div>
                            <button className='bg-secundaria px-3 rounded-lg' href=''><FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: "#4F4F4F", }} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EscreverAvaliacao;