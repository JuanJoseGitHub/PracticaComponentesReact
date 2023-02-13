![](image.jpg)

# Introducción a React

## Inicio de un proyecto de react

### Creando un proyecto desde cero
```shell
$ npx create-react-app nombre-de-la-carpeta-del-nuevo-proyecto
```
### Clonando un repositorio Git de un proyecto ya existente
```shell
$ git clone url-clonado-repo-github
$ cd carpeta-repositorio
$ npm install
```

## Puesta en marcha del proyecto
```shell
$ npm start
```
## Componentes
### Declaración
```jsx
function NomeDelComponente() {
    // Aquí o teu JavaScript
    return (
        <>
        <!-- Aquí o teu HTML>
        </>
    )
}
```
Para ver como incluir CSS, consulta [Módulos CSS](#módulo-css)
### Invocando/llamando/usando el componente
```jsx
import NomeDelComponente from "../ruta/al/fichero/del/componente"
function EsteComponenteUsaAlAnterior(){
    return (
        <>
        <NombreDelComponente/>
        </>
    )
}
export default EsteComponenteUsaAlAnterior
```
### Expresiones de JavaScript en el HTML de un componente
```jsx
function NomeDelComponente() {
    let titulo = "Este es el título."
    return (
        <>
        <h1>{titulo}</h1>
        </>
    )
}
```
### Pasando propiedades (props) a un componente
Este es el componente que recibe las propiedades
```jsx
function NomeDelComponente(props) {
    return (
        <>
        <h1>{props.titulo}</h1>
        </>
    )
}
```
Esta es la forma de proporcionarle las propiedades
```jsx
import NomeDelComponente from "../ruta/al/fichero/del/componente"
function EsteComponenteUsaAlAnterior(){
    return (
        <>
        <NombreDelComponente titulo="Este es el titulo."/>
        </>
    )
}
export default EsteComponenteUsaAlAnterior
```
## Incluyendo archivos
### Imágenes
```jsx
import nombreParaImagen from "ruta/fichero/imagen.png"
function NombreComponente(){
    return (
        <img src={nombreParaImagen}/>
    )
}
export default NombreComponente
```
### CSS
Empregar sólo para el CSS global, que afectará a todo el HTML de la aplicación independientemente del componente del que proceda.
```jsx
// ./NombreComponente.jsx
import "./NombreComponente.css"
function NombreComponente(){
    return (
        <h1>Mi aplicación</h1>
    )
}
export default NombreComponente
```
```css
/* ./NombreComponente.css */
h1 {
    text-align: center;
}
```
### Módulo CSS
Emplear de forma generalizada para proporcionar CSS exclusivo a un componente, sin riesgo de que el HTML de otros componentes se vea afectado.
```jsx
// ./NombreComponente.jsx
import styles from "./NombreComponente.module.css"
function NombreComponente(){
    return (
        <h1 className={styles.nombreClaseCSS}>Mi aplicación</h1>
    )
}
export default NombreComponente
```
```css
/* ./NombreComponente.module.css */
.nombreClaseCSS {
    text-align: center;
}
```