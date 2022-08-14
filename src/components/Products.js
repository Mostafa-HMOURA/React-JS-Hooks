import React,{ useReducer,useEffect } from 'react'
import AddProduct from './AddProduct';

const stateInitialize = {
  listProducts: [],
  counter: 0
}

const reducer =(state,action) => {
  switch(action.type){

    case 'ADD_PRODUCT': {
      return {
        ...state,
        listProducts: [...state.listProducts,action.pyload]
      }
    }

    case 'INC': {
      return {
        ...state,
        counter: state.counter + 1 
      }
    }

    case 'DNC': {
      return {
        ...state,
        counter: state.counter - 1 
      }
    }

    default: {
      return state;
    }


  }
}

const Products = () => {

  const [state,dispatch] = useReducer(reducer,stateInitialize);

  useEffect(() => {
    console.log("All")
  },[])


  const addNewProduct = (newProduct) => {
    newProduct = {
      id: state.listProducts.length + 1,
      ...newProduct   
    }
    dispatch({
      type: 'ADD_PRODUCT',
      pyload: newProduct
    })
  }

  const increment = () => {
    dispatch({
      type: 'INC'
    })
  }

  const dincrement = () => {
      dispatch({
        type: 'DNC'
      })
  }

  return (
    <div>

      <div className='text-center'>
        <h3>{state.counter}</h3>
        <button onClick={increment} className='btn btn-success mr-2'>Increment</button>
        <button onClick={dincrement} className='btn btn-secondary'>Deccrement</button>
      </div>

      <AddProduct addNewProduct={addNewProduct} />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {state.listProducts.map(prod => (
              <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products