import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function CategoryList(props)
{
    function handledelete(e)
    {
        console.log(e)
    }
    return (
        <div>
            <h2>LISTING CATEGORIES:--{props.categories.length}</h2>
            
                
                    <ul>
                    {props.categories.map(category=>{
                        return <li key={category._id}>{category.category_name}::::::::<span/><span/>
                        <button type="button" class="btn btn-danger" onClick={()=>{handledelete(category._id)}}>DELETE</button>
                        <br/><br/></li>


                    })}
                    </ul>
                    <Link to='/category/new' className='btn btn-primary'>
                    ADD CATEGORY
            </Link>
                
                
            

        </div>
    )
}

const mapStateToPorps=(state)=>{
    return {
        categories:state.categories
    }
}

export default connect(mapStateToPorps)(CategoryList)