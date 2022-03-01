/*
*   @App  Raíz del lado del cliente 
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {Header} : devolverá un componente con el contenido de prop.
*   @params  {FromProduct} : Contiene los componentes que permiten Agregar un nombre y agregar etiquetas a los productos.
*   @params  {Productos} : listará todos los productos.
*   @params  {Footer} : devolverá un componene tipo Foot con el contenido del prop.
*   
*   App inicializará todos nuestros componentes.
*/

import React from 'react';

import Headert from './components/header/Header';
import Footer from './components/footer/Footer';
import Productos from './components/products/Productos';
import FormProduct from './components/form/form';

import './App.css'

function App() {
  return (
    <>  
        <Headert prop = {"Productos"}/>
          <FormProduct/> 
          <Productos/>
        <Footer prop = "Prueba Técnica para @BlueCorner Inc."/>
    </>
  );
}
  
export default App;