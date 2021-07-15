import React from "react";
import Car from "./Car"

const Navbar = (props) =>  {

    const Compra = () => alert("Guardado en carrito");


    return (
        <nav className= "caja-uno">
        <h1>{props.nombreTienda}</h1>
        <h2>{props.subtitulo}</h2>

        <div className= "menuu">
        <ul >
        <li>INICIO </li>
        <li>MUJER </li>
        <li>HOMBRE </li>
        </ul>
        </div>
        <Car    Compra={Compra}  />
<button   className="botom"  onClick = {props.darBienvenida}> ENTRAR</button>

        </nav>
    );
};












export default Navbar;