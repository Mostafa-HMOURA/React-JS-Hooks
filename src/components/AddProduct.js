import React,{useState,useContext} from 'react';
import { UserContext } from '../contexts/userContexts';

function AddProduct({addNewProduct}) {

    const {loggedIn,setLoggedIn} = useContext(UserContext);
    const [Product,setProduct] = useState({
        name: '',
        price: 0
    })
    
    const handleForm = (e) => {
        setProduct({...Product,[e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(Product.name === '' || Product.price === 0) return;  
        else{
            addNewProduct(Product);
        }
    }

  return (
            <div> 
                <h1>Logged ? {loggedIn ? 'Logged' : 'Not Logged'}</h1>
                <button onClick={() => setLoggedIn(!loggedIn)} className="btn btn-primary" type="button">Toogle</button>
                <h3>Add Product</h3>
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label htmlFor="" className='my-2'>Product Name :</label>
                        <input onChange={handleForm} value={Product.name} placeholder="Name" name="name" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='my-2'>Product Price :</label>
                        <input onChange={handleForm} value={Product.price} placeholder="Price" name="price" type="text" className="form-control"/>
                    </div>

                    {JSON.stringify(Product)}
                    <div className="d-grid gap-2 my-3">
                        <button className="btn btn-primary" type="submit">Add Product</button>
                    </div>
                </form>
            </div>
  )
}

export default AddProduct