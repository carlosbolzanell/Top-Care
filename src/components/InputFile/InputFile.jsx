import { useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";

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
        <div {...getRootProps()} className={`border border-black rounded-full h-48 w-48 bg-branco flex justify-center items-center ${isDragActive ? 'border-primaria' : 'border-black'}`}>
            <FontAwesomeIcon icon={faFileImage}/>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}
const HasFile = ({ file }) => {
    return (
        <div className="rounded-full h-48 w-48 bg-branco">
            <img src={file} alt="" className="w-full rounded-full"/>
        </div>
    )
}