import "./styles.css"

import { useState, useEffect } from 'react'

export function Main() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    function handleSubmit() {

        localStorage.setItem('Nome:', name)
        localStorage.setItem('Email:', email)
        localStorage.setItem('City:', city)
    }

    return (
        <div className="container">

            <form action="" className="formulario">
                <h1>Next Generation Digital Bank</h1> <br />
                <h2>Receba os beneficios no seu email</h2> <br />
                <label htmlFor="name">Nome</label> <br />
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} /> <br />
                <label htmlFor="city">Cidade</label> <br />
                <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} />  <br />
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>


            <div className="image">
                <img src="image-mockups.png" alt="celulares" />
            </div>
        </div>
    )
}