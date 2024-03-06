import { Select, Option } from "@material-tailwind/react";

export default function InputSelect({ label, options }) {

    return (
        <div>
            <Select label={label}>
                {options.map((opcao, i) => (
                    <Option value={opcao} key={i} className="">
                        {opcao}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
