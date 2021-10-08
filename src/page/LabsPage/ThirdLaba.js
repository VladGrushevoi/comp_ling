import { Button } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react'
import { normalizeWord } from '../../utils/normWord'

const columns = [
    { field: 'id', headerName: 'Номер', width: 150 },
    {
      field: 'name',
      headerName: 'Прямое название',
      width: 300,
    },
    {
      field: 'reverseName',
      headerName: 'Обратное название',
      width: 300,
      align: 'right'
    },
  ];
  

export const ThirdLaba = () => {
    const [words, setWords] = useState([])
    const [info, setInfo] = useState([])

    const clickHandler = (e) => {
        e.preventDefault()
        setWords([])
        setInfo([])
        readFile()
    }

    const readFile = () => {
        let file = document.querySelector("#file-input").files[0];
		let reader = new FileReader();
		reader.addEventListener('load', function(e) {
	    		let text = e.target.result;
                const data = text.replace(/[&\/\\#,+()$~%.'":*?!<>{}\r\n\r\n]/g, '').toUpperCase().split(' ')
                setWords(data)

                formData()
		});
		reader.readAsText(file);
      }

      const formData = () => {
        let data = []
        for (let i = 0; i < words.length; i++) {
            let word = normalizeWord(words[i])
            if (data.filter(d => d.name === word).length >= 1) {
                
            } else {
                const reverseWord = word.split("").reverse().join("")
                data.push({name: word, reverseName: reverseWord})
            }
        }
        data.sort(compareByName)
        setInfo(data.map((d,index) => {
            return { ...d, id:index+1}
        }))
        
    }

    const compareByName = (a,b) => {
        if(a.name < b.name){
            return -1
        }
        if(a.name > b.name){
            return 1
        }
        return 0
    }

    return (
        <>
            <h1>Третя лаба</h1>
            <div className='title'>
                <input type="file" id="file-input" />
                <Button className='button' variant="contained" onClick={(e) => clickHandler(e)}>Почати</Button>
                <pre id="file-contents"></pre>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={info}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                />
            </div>
        </>
    )
}