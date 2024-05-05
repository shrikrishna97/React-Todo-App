import React from 'react'

const todo = ({todo, onDelete}) => {
  return (
    <div className="container">
    <div className="card">
      <h4>{todo.sno}</h4>
      <h5>{todo.name}</h5>
      <p>{todo.description}</p>
      <button  className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <br />
    </div>
    
  )
}

export default todo
