import { useState } from "react"

export default function teste({ label, options }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={`relative border border-cinza h-9 rounded-lg flex items-center select-none ${open ? 'outline outline-[1.9px] outline-black' : 'outline-none'} `} onClick={() => setOpen(!open)}>
                <p className="font-poppins text-cinza-escuro text-sm pl-2">{label}</p>
                {open && (
                    <ul className="absolute bg-white flex flex-col top-10 w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none">
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins text-sm pl-3 py-2">
                                <button className="flex text-start">{opcao}</button>
                            </li>
                        ))}
                    </ul>
                )

                }
            </div>
        </div>
    )
}