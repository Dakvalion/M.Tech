export function FileUploader () {
    return (
        <div class='container'>
            <div class='wrap'>
            <p class='text'>Выберите файл в формате CSV</p>
            <label for="file_upload" class="btn">Выберите файл</label>
            <input type='file' id="file_upload"/>
        </div>
        </div>
        
    
    )
}