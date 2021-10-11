import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
function CreateTodo({todos,setTodo}) {
    const history = useHistory();
    const [title,setTitle]=useState("");
    const handleSubmit= ()=>{
        const new_todo=[...todos,{id:todos.length,title:title}];
        setTodo(new_todo)
        localStorage.setItem("todos",JSON.stringify(new_todo))
        // setTimeout(function(){
        if(!window.confirm(" Todo Added Successfully! Want to Create more?"))
        history.push("/show_todo")
        // },1000)
    }
    return (
        <div className="center"> 
            <div className="card">
                <div className="card-header">
                    Create Todo
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Title : </label> <br/>
                            <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={()=>handleSubmit()}>Create Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo
