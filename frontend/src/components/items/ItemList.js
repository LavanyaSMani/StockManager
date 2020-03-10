import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function ItemList(props)
{
    return (
        <div>
            <h2>LISTING ITEMS::--{props.items.length}</h2>
            <div className='row'>
                <div className='col-md-5'>
                {props.items&&
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ITEM NAME</th>
                        <th>CATEGORY</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item,i)=>{
                        console.log("item categpries are",item.category.category_name)
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.item_Name}</td>
                                <td>{item.category.category_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
                }</div>
            </div>
        
            
            {/* {props.items &&<ul>
            {props.items.map((item,i)=>{
                return <li key={i}>{item.item_Name}::--{item.category.category_name}
                </li>

            })}
            </ul>} */}
            <Link to='/item/new' className='btn btn-primary'>
                ADD ITEM
            </Link>
           
            
        </div>
    )
}

const mapStoreToProps=(state)=>{
    return {
        items:state.items
    }
}

export default connect(mapStoreToProps)(ItemList)

