import CardProduto from "../Cards/CardProduto";
import TituloLinha from "../TituloLinha/TituloLinha";

import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Carrossel = (props) => {
    return (
        <div>
            <TituloLinha titulo={props.titulo}/>
            <div className='bg-branco w-[90%] m-auto'>
                <Carousel
                    className="h-[19rem]"
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <FontAwesomeIcon icon={faArrowRight} size="2xl" flip="horizontal" style={{ color: "#322828", }} />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <FontAwesomeIcon icon={faArrowRight} size="2xl" style={{ color: "#322828", }} />

                        </IconButton>
                    )}
                >

                    <div className='flex flex-row m-auto justify-evenly'>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                    <div className='flex flex-row m-auto justify-evenly'>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                    <div className='flex flex-row m-auto justify-evenly'>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                    <div className='flex flex-row m-auto justify-evenly'>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>

                </Carousel>
            </div>
        </div>

    )
}
export default Carrossel;