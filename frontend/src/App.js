import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Register from './components/users/Register'
import Home from './components/Home'
import Login from './components/users/Login'
import OrderList from './components/orders/OrderList'
import OrderNew from './components/orders/NewOrder'
import Category from './components/category/CategoryList'
import CategoryNew from './components/category/NewCategory'
import ItemList from './components/items/ItemList'
import ItemNew from './components/items/NewItem'
import PurchaseList from './components/purchases/PurchaseList'
import NewPurchase from './components/purchases/NewPurchase'
function App() {
  function logout()
  {
    localStorage.removeItem('authToken')
    window.location.reload()

  }

  return (
    
    <BrowserRouter>
    <div>
      {/* <Link href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' rel='stylesheet'/>
      <button type="button" class="btn btn-danger">Danger</button> */}
      {localStorage.getItem('authToken')?<div>
        <Link to='/orders'>ORDER</Link>||
        <Link to='/categories'>CATEGORIES</Link>||
        <Link to='/items'>ITEMS</Link>||
        <Link to='/purchases'>PURCHASES</Link>||
        <Link to='/logout' onClick={logout}>LOGOUT</Link>
      </div>:<div>
        <Link to='/'>HOME</Link>||
      <Link to='/register'>REGISTER</Link>||
      <Link to='/login'>LOGIN</Link>
        </div>
      }
      
{/* trying crad bootstrap */}


      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>

      <Route path='/categories' component={Category}/>
      <Route path='/category/new' component={CategoryNew}/>

      <Route path='/orders' component={OrderList}/>
      <Route path='/order/new' component={OrderNew}/>

      <Route path='/items' component={ItemList}/>
      <Route path='/item/new' component={ItemNew}/>

      <Route path='/purchases' component={PurchaseList}/>
      <Route path='/purchase/new' component={NewPurchase}/>
     

    </div>
    </BrowserRouter>
    
  );
}

export default App;
