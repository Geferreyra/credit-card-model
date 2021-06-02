import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const PaymentForm=()=>{

    /*Definimos un estado y el setstate para asignar valores. Usestate es el estado inicial */
    const[state,setState] = useState({
        number:"",
        name:"",
        expiry:"",
        cvc:"",
        focus:""
        
    })

const handleInputChange=(e)=>{
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}


const handleFocusChange =(e)=>{
    setState({
        ...state,
        focus : e.target.name
    })
}

    return(
        <div className="card">
            <div className="card-body">

            <Cards
             number={state.number}
             name={state.name}
             expiry={state.expiry}
             cvc={state.cvc}
             focused={state.focus}
                />
          <form> 
              <div className="form-group">
                  <label htmlFor="number">Numero de tarjeta</label>
                  <input type="text"
                  name="number"
                  id="number"
                  className="form-control"
                  maxLength="16"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                  />

              </div>
            
            
              <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                  />

              </div>

              <div className="form-row">
              <div className="form-group col-md-6">
                  <label htmlFor="expiry">Fecha de vencimiento</label>
                  <input type="text"
                  name="expiry"
                  id="expiry"
                  className="form-control"
                  maxLength="4"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                  />

              </div>

              <div className="form-group col-md-6">
                  <label htmlFor="cvc">CVC</label>
                  <input type="text"
                  name="cvc"
                  id="cvc"
                  className="form-control"
                  maxLength="4"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                  />


                 </div>
              </div>
            <button  type="button" className="btn btn-success btn-block- btn-lg">
                Pagar</button> 
          </form>
             </div>

        </div>
    )

}

export default PaymentForm