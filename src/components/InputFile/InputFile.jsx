import { useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";

export default function InputFile() {
    const [file, setFile] = useState(null);

    const onDrop = useCallback((files) => {
        const filePego = files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setFile(reader.result);
        };
        reader.readAsDataURL(filePego);
    }, []);


    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg']
        }
    })
    if (file) return <HasFile file={file} />;

    return <Input dropzone={dropzone} />

}
const Input = ({ dropzone }) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;
    return (
        <div {...getRootProps()} className={`border border-black rounded-full h-full w-full bg-branco flex justify-center items-center ${isDragActive ? 'border-primaria' : 'border-black'}`}>
            <img src="./assets/imagem-galeria.svg" alt="" className="w-[40%]"/>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}
const HasFile = ({ file }) => {
    return (
        <div className="rounded-full h-full w-full bg-branco">
            <img src={file} alt="" className="w-full h-full rounded-full"/>
        </div>
    )
}