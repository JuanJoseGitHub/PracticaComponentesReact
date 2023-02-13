import Encabezado from "./components/Encabezado/Encabezado";
import Login from "./components/Login/Login";
import Nova from "./components/Nova/Nova";

function App() {
  return (
    <>
    <h1>Tests</h1>

    <h2>Encabezado</h2>
    <Encabezado/>

    <h2>Nova</h2>
    <Nova titulo="Este é o título" contido="Contido da nova primeira"/>
    <Nova titulo="Este é outro título" contido="Contido da nova segunda"/>
    </>
  );
}

export default App;
