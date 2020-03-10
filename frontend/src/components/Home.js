import React from 'react'
import {Link} from 'react-router-dom'
import order from '../uploads/orderimg.jpg'


function Home(){
    return (
        <div>
        <h2>WELCOME TO STOCK MANAGER APP</h2>
        <div class="row">
        {/* <div class="card" style={{width: 18}}>
  <img src="order" width='30' height='30' class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">ORDER</h5>
    <p class="card-text">ORDER LIST</p>
    <Link to='/orders'class="btn btn-primary">OREDERS HERE</Link>
  </div>
</div> */}

  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">PUCHASES</h5>
        <p class="card-text">View list of orders by clicking here</p>
        <Link to='/purchases'class="btn btn-primary">PURCHASES HERE</Link>
      </div>
    </div>
  </div>
  </div>

  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ITEMS</h5>
        <p class="card-text">View list of items by clicking here</p>
        <Link to='/items'class="btn btn-primary">OREDERS HERE</Link>
      </div>
    </div>
  </div>

  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">CATEGORIES</h5>
        <p class="card-text">View list of categories by clicking here</p>
        <Link to='/categories'class="btn btn-primary">OREDERS HERE</Link>
      </div>
    </div>
  </div>
        
        </div>
    )
}
export default Home