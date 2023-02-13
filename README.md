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

## Incluyendo archivos
```jsx
import nombre_para_recurso from "ruta_fichero_recurso"
function NombreComponente(){
    return (
        <img src={nombre_para_recurso}/>
    )
}
export default NombreComponente
```