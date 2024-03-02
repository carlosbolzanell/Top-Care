const Endereco = () => {
    return (
        <div className="font-poppins">
            <p className="font-bold text-lg">Casa</p>
            <div className="flex flex-row justify-around p-2 bg-branco rounded-lg border-2">
                <div className="flex flex-col justify-between font-medium divide-y divide-slate-200 ">
                    <p className="py-2">CEP</p>
                    <p className="py-2">Estado</p>
                    <p className="py-2">Bairro</p>
                    <p className="py-2">Rua</p>
                    <p className="py-2">N°</p>
                    <p className="py-2">Complemento</p>
                </div> 
                <div className="flex flex-col justify-between text-cinza-letras divide-y divide-slate-200 text-right text-sm">
                    <p className="py-2.5">99999-999</p>
                    <p className="py-2.5">Santa Catarina</p>
                    <p className="py-2.5">Centro</p>
                    <p className="py-2.5">Sen. Luiz Henrique da Silveira</p>
                    <p className="py-2.5">999</p>
                    <p className="py-2.5">Apto 300</p>
                </div> 
            </div>
        </div>
    )
}

export default Endereco;
