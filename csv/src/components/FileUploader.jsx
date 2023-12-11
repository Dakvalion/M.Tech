import { useState} from "react"
import { useNavigate } from 'react-router-dom';

export function FileUploader () {

    const navigate = useNavigate();
    const [isError, setIsEror] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        const allowedType = ['text/csv'];
        if(!allowedType.includes(selectedFile?.type)){
            setIsEror(true);
            setErrMsg("Неправильный формат файла, разрешены только файлы .CSV");

            return;
        }
        navigate("/table", { state: { file: selectedFile } });

    }

    


    return (
        <>
        <div className='container'>
        {isError && <div className="error-message">{errMsg}</div> }
            <div className='wrap'>
            <p className='text'>Выберите файл в формате CSV</p>
            <label for="file_upload" className="btn" onClick={()=>{}}>Выберите файл</label>
            <input type='file' id="file_upload"
                onChange={handleFileChange}
            />
        </div>
        </div>
        </>
        
    
    )
}