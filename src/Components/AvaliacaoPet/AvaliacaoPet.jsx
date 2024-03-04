import { Rating } from "@material-tailwind/react";

const AvaliacaoPet = () => {
    return (
        <div className="flex gap-40 items-center">
            <p className="font-poppins text-lg">Adaptável</p>
            <div className="flex flex-col gap-4">
                <Rating unratedColor="amber" ratedColor="amber"/>
            </div>
        </div>
    )
}
export default AvaliacaoPet;