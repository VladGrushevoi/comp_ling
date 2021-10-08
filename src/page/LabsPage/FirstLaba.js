import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import '../../App.css'
import DataTable from '../../components/Table';
import { normalizeWord } from '../../utils/normWord';
 
export const FirstLaba = () => {

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
                data.map(d => {
                    if(d.name === word){
                        d.count += 1
                    }
                })
            } else {
                console.log(2)
                data.push({name: word, count: 1})
            }
        }
        data.sort(compare)
        data = addRang(data)
        setInfo(data)
        console.log(info)
        
    }

    const addRang = (data) => {
        return data.map((d,index) => {
            return {
                ...d,
                id: index + 1
            }
        })
    }

    const compare = (a,b) => {
        if(a.count > b.count){
            return -1
        }
        if(a.count < b.count){
            return 1
        }
        return 0
    }

    return (
        <>
        <h1>Перша лаба</h1>
        <div className='title'>
            <input type="file" id="file-input" />
            <Button className='button' variant="contained" onClick={(e) => clickHandler(e)}>Почати</Button>
            <pre id="file-contents"></pre>
        </div>
            <LineChart
                width={1400}
                height={300}
                data={info}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis  />
                <YAxis dataKey="id" type="number" domain={[0, 'dataMax']}/>
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="count" stroke="#ff7300" yAxisId={0} />
            </LineChart>
            <DataTable data={info}/>
        </>
    )
}