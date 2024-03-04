import InputFile from "../../InputFile/InputFile"
import Select from "../../Select"
import InputText from "../../InputText/InputText";
import BotaoPequeno from "../../BotaoPequeno";

export default function CadastroPet() {
    return (
        <div className="border border-black w-[60%] h-[40%] flex justify-center flex-col bg-branco rounded-lg">
            <div className="flex items-center justify-center">
                <div className="w-[65%] flex justify-end">
                    <h1 className="font-poppins font-bold text-center text-2xl mt-4">Cadastre seu pet!</h1>
                </div>
                <div className="w-[40%] flex justify-end">
                    <img src="./assets/Sair.svg" alt="" className="w-[10%] self-end mr-2" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[80%] m-auto">
                <div className="w-32 h-32">
                    <InputFile />
                </div>
                <div className="flex flex-col gap-4 w-[35%]">
                    <Select label={"Qual o seu pet?"} />
                    <Select label={"Qual a raça?"} />
                </div>
                <div className="flex flex-col gap-4 w-[35%]">
                    <InputText label="Qual o nome do pet?" type="text" />
                    <InputText label="Qual a idade?" type="number" />
                </div>
            </div>
            <div className="w-full flex justify-center mb-4">
                <BotaoPequeno texto="Cadastrar" />
            </div>
        </div>
    )
}