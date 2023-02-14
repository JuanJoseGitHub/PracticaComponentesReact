import { useState } from "react"

function Rexistro() {

    let [ nome, setNome ] = useState("Daniel")

    function manexadorDeInputNome(evento) {
        setNome(evento.target.value);
    }

    return (
        <>
        <label>
            Nombre:
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
            <p>Este é o contido de nome en maiusculas: {nome.toUpperCase()}</p>
        </label>
        </>
    )
}

export default Rexistro