import { Button, Container, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import '../../App.css'
import { useTextField } from '../../hooks/InputHook'

export const FourthLaba = () => {
    const [data, setData] = useState({
        relevant: 0,
        absRelevant: 0
    })
    const firstText = useTextField("Иванов Иван Иванович", "firstText")
    const secondText = useTextField("Иванов Иван Иваныч", "secondText")
    const nGram = useTextField("3", "n-gram")

    const handleSubmit = (e) => {
        e.preventDefault()
        let s1 = firstText.value.replace(/[&\/\\#,+()$~%.'":*?!<>{}\r\n\r\n\s+]/g, '').toLowerCase()
        let s2 = secondText.value.replace(/[&\/\\#,+()$~%.'":*?!<>{}\r\n\r\n\s+]/g, '').toLowerCase()
        const data = {
            firstText: firstText.value,
            secondText: secondText.value,
            nGram: nGram.value,
            relevant: revelant(s1, s2, parseInt(nGram.value, 10)) * 100,
            absRelevant: absRelevant(s1, s2, parseInt(nGram.value, 10)) * 100
        }
        setData(data)
    }

    const absRelevant = (s1, s2, nGram) => {
        let sumRelevant = 0
        for (let i = 1; i <= nGram; i++) {
            sumRelevant += revelant(s1, s2, i)
        }
        console.log(sumRelevant / nGram)
        return sumRelevant / nGram
    }

    const revelant = (s1, s2, nGram) => {
        return (nGramMatch(s1, s2, nGram) + nGramMatch(s2, s1, nGram)) / (nGramCount(s1, nGram) + nGramCount(s2, nGram))
    }

    const nGramMatch = (first, second, nGram) => {
        let nGrams = []
        let count = 0
        for (let i = 0; i < first.length - nGram + 1; i++) {
            let subStr = first.substr(i, nGram)
            let re = new RegExp(subStr, 'g');
            if ((second.match(re) || []).length >= 1) {
                count++
            }
        }
        return count;
    }

    const nGramCount = (s, nGram) => {
        return s.length - nGram + 1
    }

    return (
        <>
            <h1>Третя лаба</h1>
            <Container maxWidth="lg">
                <form className='form' onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            required
                            id="1"
                            type='text'
                            label="Введити первый текст"
                            variant="outlined"
                            fullWidth
                            {...firstText}
                        />
                        <TextField
                            required
                            id="2"
                            type='text'
                            label="Введити второй текст"
                            variant="outlined"
                            fullWidth
                            {...secondText}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Колличество N-грам"
                            variant="outlined"
                            type='number'
                            fullWidth
                            {...nGram}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className="submitButton"
                            type="submit"
                        >
                            Почати
                        </Button>
                    </div>
                </form>
                <h1>Релевантность - {data.relevant}%</h1>
                <h1>Общая релевантность - {data.absRelevant}%</h1>
            </Container>
        </>
    )
}