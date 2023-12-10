const headers = [
    {
        id:1,
        header:"Имя",
        width:"313px"
    },
    {
        id:2,
        header: "Номер телефона",
        width:"250px"
    },
    {
        id:3,
        header: "email",
        width:"190px"
    },
    {
        id:4,
        header: "Дата рождения",
        width:"172px"
    },
    {
        id:5,
        header: "Адрес",
        width:"500px"
    },
    
    
]

export function Table () {
    return (
        <>
        <label for='file_upload' class="upload">Загрузить новый файл</label>
        <input type="file" id="file_upload"/>
        <table className="container" width="1670px">
            <thead>
                <tr>
                    {headers.map((item) =>{
                        return(
                            <th width={item.width}>{item.header}</th>
                        )
                    }
                    )}
                </tr>
            </thead>
        </table>
        </>
        
    )
}