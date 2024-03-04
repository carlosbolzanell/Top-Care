import { Select, Option } from "@material-tailwind/react";

export default function InputSelect({ label, options }) {
    return (
        <div>
            <Select label={label} className='max-h-xs'>
                {options.map((opcao, i) => (
                    <Option value={opcao} key={i}>
                        {opcao}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
