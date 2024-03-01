
const CardPet = () => {
    return (
        <div className="flex felx-row bg-branco shadow-lg w-[18%] py-6 items-center justify-center gap-4 rounded-lg">
            <div>
                <img className='rounded-full' src="./public/assets/gato.png" />
            </div>
            <div className="text-sm text-preto font-poppins">
                <p>Animal: Gato</p>
                <p>Raça: Europeu</p>
                <p>Idade: 3 anos</p>
            </div>
        </div>
    )
}
export default CardPet;