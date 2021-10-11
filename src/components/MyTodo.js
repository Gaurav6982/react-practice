import React from 'react'

function MyTodo({todos}) {
    return (
        <div className="container">
            <h1>My Page</h1>
            <div className="card">
            <div className="card-header">All Todos</div>
            <div className="card-body">
            {
                todos.length===0?<div>No Todos Found</div>:todos.map(todo=>{
                    return (
                                <div className="card" key={todo.id}>
                                    <div className="card-body"> {todo.title}</div>
                                </div>
                            )
                })
            }
             </div>
            </div>
        </div>
    )
}

export default MyTodo
