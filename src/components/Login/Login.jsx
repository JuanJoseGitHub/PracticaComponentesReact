import { useState } from "react";
import styles from "./Login.module.css"

function Login() {

    const [nomeUsuario, gardaNomeUsuario] = useState("");

    function manexadorNomeDeUsuario(evento){
        gardaNomeUsuario(evento.target.value)
    }

    return (
      <form className={styles.login}>
        <input type="text" name="usuario" onInput={manexadorNomeDeUsuario}/>
        <input type="password" name="contrasinal"/>
        <input type="submit" value="Enviar" />
        <p>¿Que hai en nomeUsuario: {nomeUsuario}</p>
      </form>
    );
}
  
export default Login;
  