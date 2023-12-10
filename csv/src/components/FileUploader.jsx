export function FileUploader () {
    return (
        <div className='container'>
            <div className='wrap'>
            <p className='text'>Выберите файл в формате CSV</p>
            <label for="file_upload" className="btn">Выберите файл</label>
            <input type='file' id="file_upload"/>
        </div>
        </div>
        
    
    )
}