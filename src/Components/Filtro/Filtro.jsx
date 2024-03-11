import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

const Filtro = () => {
    return (
        <div className="grid font-poppins text-sm gap-3 border border-cinza-escuro rounded p-3 pr-20 break-all">
            <div className="flex gap-3">
                <FontAwesomeIcon icon={faFilter} style={{color: "#a2a3a4"}} size="2xl" />
                <p className="mt-1">Ordenar por...</p>
            </div>
            <div className="grid gap-3 ">
                <p className="text-base underline decoration-solid">Mais populares</p>
                <p className="">Mais recentes</p>
                <p className="">Menor preço</p>
                <p className="">Maior preço</p>
                <p className="">Mais bem avaliados</p>
            </div>

        </div>
    )
}
export default Filtro;