import { Input } from "@material-tailwind/react";

export default function InputText({label, type}){
    return(
        <Input label={label} type={type} className=""/>
    )
}