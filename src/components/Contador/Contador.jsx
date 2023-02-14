import { useState } from "react";

function Contador () {

    let [ contador, setContador] = useState(0)

    function manexadorDoClickSetter () {
        setContador(contador+1)
    }

    function manexadorDoClicAsignacion () {
        contador = contador + 1
    }

    return (
        <>
        <p>Total: {contador}</p>
        <button onClick={manexadorDoClickSetter}>
            Contar con setter
        </button>
        <button onClick={manexadorDoClicAsignacion}>
            Contar con asignación
        </button>
        </>
    )

}

export default Contador