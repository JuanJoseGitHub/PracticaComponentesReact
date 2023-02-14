import Encabezado from "./components/Encabezado/Encabezado";
import Login from "./components/Login/Login";
import Nova from "./components/Nova/Nova";
import Contador from "./components/Contador/Contador"
import Rexistro from "./components/Rexistro/Rexistro";

function App() {

  const novas = [
    {
      titulo: "Esta é unha nova",
      contido: "Este é o contido da primeira nova"
    },
    {
      titulo: "Esta é outra nova",
      contido: "Este é o contido de outra nova"
    }
  ]

  const componentesNovas = novas.map(
    nova => <Nova titulo={nova.titulo} contido={nova.contido}/>
  )

  return (
    <>
    <h1>Tests</h1>

    <h2>Rexistro</h2>
    <Rexistro/>

    <h2>Contador</h2>
    <Contador/>

    <h2>Encabezado</h2>
    <Encabezado/>

    

    <h2>Novas</h2>
    {componentesNovas}
    </>
  );
}

export default App;
