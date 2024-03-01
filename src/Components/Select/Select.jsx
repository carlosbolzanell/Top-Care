import { Select, Option } from "@material-tailwind/react";

export default function InputSelect({label}) {
    return (
        <div>
            <Select label={label}>
                <Option>Doguinho</Option>
                <Option>Gatito</Option>
            </Select>
        </div>
    )
}