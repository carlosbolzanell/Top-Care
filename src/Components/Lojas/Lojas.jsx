import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Lojas = () => {
    return (
        <div className="font-poppins grid gap-4">
            <img className="rounded-t-lg" src="./assets/imagem-loja.png" />
            <div className="flex gap-3 justify-center">
                <div className="mt-2">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#B5A6F3",}} size = "xl" />
                </div>
                <div className="grid">
                    <p className="text-lg">Top Care Balneário Camboriu - SC</p>
                    <p className="text-sm text-cinza-escuro">Rua Dom Henrique, 424</p>
                </div>
            </div>
        </div>
    )
}
export default Lojas;