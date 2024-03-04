const TituloLinha = (props) => {
    return (
        <div className="mx-14 p-6">
            <p className="font-averia text-[1.4rem] text-preto font-black">{props.titulo}</p>
            <div className="border-t border-preto mt-3 px-30"></div>
        </div>
    )
}
export default TituloLinha;