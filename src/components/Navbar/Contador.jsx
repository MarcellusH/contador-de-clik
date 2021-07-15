import React, {useState} from "react";
 



 function Contador  ()  {

    const [state, setState] = useState(1)
    
    
     const pickButton = () => {
         setState (state + 1)
      
    }

    const reinicio = () => {
         setState(1)
       
    }
    
    return (
        <div>
            <button className="bot" onClick= {pickButton}>CLICK</button>
            <h2  className="letras">Click recibidos:{state}</h2>

            <button className="bot"  onClick={reinicio}>BORRAR</button>

        </div>
    )
}

export default Contador;