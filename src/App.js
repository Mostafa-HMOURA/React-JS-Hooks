import Products from "./components/Products";
import {useEffect,useState} from 'react';
import {UserContext} from './contexts/userContexts';

function App() {

  const [loggedIn,setLoggedIn] = useState(true);

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h1>List Of Product</h1>
          <hr />
          <UserContext.Provider value={{loggedIn,setLoggedIn}}>
            <Products/>
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
