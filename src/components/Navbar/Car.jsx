import React from "react";
import Carro from "./assets/img/carcompra.svg"

const Car = (props) => {
    return (
        <div   className="carrito">
            

            <button  onClick={props.Compra}>
            <img src={Carro} alt="" />
            </button>
            </div>
    );
};






export default Car;