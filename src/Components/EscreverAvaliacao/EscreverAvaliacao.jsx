import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

const EscreverAvaliacao = () => {
    return (
        // div principal
        <div className='principal'>
            {/* div da foto */}
            <div className=''>
                <img className='' src="./public/assets/gato.png" />
            </div>

            {/* div do conteudo */}
            <div className='conteudo'>

                {/* div do nome + estrelas */}
                <div className='nome e estrelas'>
                    <p className='pl-2 font-regular text-sm text-preto'>Karoliny Cieply</p>
                    <div className='flex gap-1 items-center'>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD601", }} />
                    </div>
                </div>
                <div className='linha'>

                </div>

                {/* div do texto */}
                <div className='conteudo'>
                    <p className='pl-2 py-2 font-regular text-sm text-preto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in repudiandae omnis autem nostrum deserunt enim, natus, molestias, suscipit vitae quaerat. Harum officiis iusto ullam laudantium minima quibusdam excepturi iure.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default EscreverAvaliacao;