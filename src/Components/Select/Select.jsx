import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

export default function InputSelect({ label, options }) {
    const [opcoes, setOpcoes] = useState(options || []);
    return (
        <div>
            <Select label={label}>
                {options.map((opcao, i) => (
                    <Option value={opcao} key={i}>
                        {opcao}
                    </Option>
                )
                )}
            </Select>
        </div>
    );
}
