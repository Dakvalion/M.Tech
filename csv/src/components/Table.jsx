import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { usePapaParse } from 'react-papaparse';



const head = [
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
        width:"380px"
    },
    
    
]

export function Table () {

    const location = useLocation();
    const uploaded_file = location.state.file;
    const navigate = useNavigate();
    const [tableData, setTableData] = useState(() => {
        const savedData = localStorage.getItem('tableData');
        return savedData ? JSON.parse(savedData) : null;
    });
    const { readString } = usePapaParse();

    
    
    const parseCSV = (text) => {
        readString(text, {
         skipEmptyLines: true,
         complete: (results) => {
           results.data.splice(0, 1);
           setTableData(results.data);
           localStorage.setItem('tableData', JSON.stringify(results.data));
         },
        });
    };
    
    
    useEffect(() => {
        if (!tableData) {
        const reader = new FileReader();
        reader.onload = function (event) {
          parseCSV(event.target.result);
        };
        reader.readAsText(uploaded_file, 'CP1251');
        }
    }, [uploaded_file, tableData]);

     

    const redirect = (event) => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
        <button class="upload" onClick={redirect}>Загрузить новый файл</button>
        <table className="table_container" width="1670px">
            <thead>
                <tr>
                    {head.map((item) =>{
                        return(
                            <th width={item.width} key={item.id}>{item.header}</th>
                        )
                    }
                    )}
                </tr>
            </thead>
                {tableData && tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                    </tr>
                ))}
        </table>
        </>
        
    )
}