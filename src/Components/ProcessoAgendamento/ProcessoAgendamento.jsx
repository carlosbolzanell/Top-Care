import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw, faBars, faLocationDot, faCalendar, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"

const ProcessoAgendamento = () => {
    return (
        <div className="font-poppins flex items-center text-center gap-20">
            <div>
                <div className="">
                <div class="w-full bg-gray-200 rounded-full">
                    <div class="h-4 rounded-full bg-secundaria w-[25%]"></div>
                </div>
                    <FontAwesomeIcon icon={faPaw} size = "lg" />
                    <FontAwesomeIcon icon={faBars} size = "lg" />
                    <FontAwesomeIcon icon={faLocationDot} size = "lg" />
                    <FontAwesomeIcon icon={faCalendar} size = "lg" />
                    <FontAwesomeIcon icon={faClipboardCheck} size = "lg" />
                </div>
            </div>
            <div>
                <p>Selecione Pet</p>
                <p>Selecione o serviço</p>
                <p>Selecione o local</p>
                <p>Selecione a data, a hora e o profissional</p>
                <p>Resumo final</p>
            </div>
        </div>
    )
}
export default ProcessoAgendamento;