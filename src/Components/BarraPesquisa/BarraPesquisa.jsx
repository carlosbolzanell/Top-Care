import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function BarraPesquisa({placeholder}){
    return(
        <div className="border border-black w-[30%] flex rounded h-8">
            <div className="w-[10%] flex items-center justify-center">
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="w-[90%] flex">
                <input type="text" className="focus:outline-0 w-full rounded placeholder:text-preto font-poppins" placeholder={placeholder}/>
            </div>
        </div>
    )
}