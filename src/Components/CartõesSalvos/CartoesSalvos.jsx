import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CartoesSalvos = () => {
    return (
        <div className="bg-branco flex flex-row items-center p-4 font-poppins b rounded-lg text-sm">
            <div className="flex flex-col">
                <p className="mb-[2%]">Cartão de crédito</p>
                <p>Kristian Erdmann</p>
            </div>
            <div className="px-10 text-3xl font-extralight">|</div>
            <div className="">
                <p className="mb-[2%]">Validade 12/28</p>
                <p>Final 9875</p>
            </div>  
            <img src="./assets/logo-mastercard.png" className="px-10" alt="Mastercard Logo" />
            <button className="bg-primaria rounded-full w-8 h-8 font-bold ">+</button>
            <div className="text-base font-regular flex flex-col pl-10">
                <button className=""><FontAwesomeIcon icon={faAngleUp} /></button>
                <button className=""><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>
        </div>
    );
}

export default CartoesSalvos;
