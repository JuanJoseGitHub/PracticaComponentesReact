import { useState } from "react"

function Rexistro() {

    let [ nome, setNome ] = useState("")
    let [ clave, setClave ] = useState("")
    let [ email, setEmail ] = useState("")

    function manexadorDeInputNome(evento) {
        setNome(evento.target.value);
    }
    function manexadorDeInputClave(evento) {
        setClave(evento.target.value);
    }
    function manexadorDeInputEmail(evento) {
        setEmail(evento.target.value);
    }


    return (
        <>
        <label>
            Nombre:
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
            <p>Este é o contido de nome en maiusculas: {nome.toUpperCase()}</p>
            Clave:
            <input type="password" name="clave" value={clave} onInput={manexadorDeInputClave}/>
            <p>Este é o contido de clave en maiusculas: {clave.toUpperCase()}</p>
            Correo electrónico
            <input type="email" name="email" value={email} onInput={manexadorDeInputEmail}/>
            <p>Este é o contido de eMail en maiusculas: {email.toUpperCase()}</p>
        </label>
        </>
    )
}

export default Rexistro