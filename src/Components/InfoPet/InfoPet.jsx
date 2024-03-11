const InfoPet = ({cor}) => {
    const teste = `font-poppins font-medium text-l h-32 flex justify-center py-3 rounded-t-md ${cor == "primaria" ? "bg-primaria" : "bg-secundaria"}`
    return (
        <div className= "w-48 h-24 shadow-2xl text-center font-poppins flex justify-center flex-col">
            <p  className={teste}>Expectativa de vida</p>
            <p className="bg-amber-50 h-20 align-middle text-lg font-semibold py-4 rounded-b-md">5 anos</p>
        </div>
    )
}

export default InfoPet;