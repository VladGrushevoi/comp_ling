import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const MainPage = () => {


    return (
        <>
        <div className = "container-link">
            <Link to='1-laba'> Перша лаба </Link>
            <Link to='2-laba'> Друга лаба </Link>
            <Link to='3-laba'> Третя лаба </Link>
            <Link to='4-laba'> Четверта лаба </Link>
        </div>
        </>
    )
}

export default MainPage;