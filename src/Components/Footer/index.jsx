const Footer = () => {
    return (
        <div className="bg-secundaria font-poppins font-light absolute bottom-0">
            <div className="px-[70px] py-[30px] flex flex-row justify-between items-start text-lg">
                <div className="pr-8">
                    <img className="h-[70px]" src="./assets/LogoFooter.png" />
                </div>

                <div className="flex flex-col gap-1">
                    <h5>Empresa</h5>
                    <a className="underline text-cinza-escuro">Sobre nós</a>
                    <a className="underline text-cinza-escuro">Perguntas frequentes</a>
                </div>

                <div className="flex flex-col gap-1">
                    <h5>Fale conosco</h5>
                    <a className="underline text-cinza-escuro">Email</a>
                    <a className="underline text-cinza-escuro">Telefone/ SMS</a>
                </div>

                <div>
                    <h5>Nossas redes sociais</h5>
                    <div className="flex flex-row gap-3 pt-[20px] justify-center">
                        <i className="fa-brands fa-instagram fa-xl" style={{color: "#322828",}}></i>
                        <i className="fa-brands fa-facebook fa-xl" style={{color: "#322828",}}></i>
                        <i className="fa-brands fa-youtube fa-xl" style={{color: "#322828",}}></i>
                        <i className="fa-brands fa-twitter fa-xl" style={{color: "#322828",}}></i>
                    </div>
                </div>

                <div>
                    <h5>Métodos de pagamento</h5>
                    <img className="w-[200px]" src="./assets/Pagamento.png" />
                </div>
            </div>
                    
            <div className="flex flex-row justify-between text-cinza-escuro py-2 px-4 text-[10px] border-t border-cinza-escuro">
                <p>Copright 2023 © Todos os direitos reservados a Top Care Pet Shop</p>
                <p>Compra segura - A TopCare garante segurança para suas informações pessoais e financeiras</p>
            </div>
            
        </div>
    )
}
export default Footer;