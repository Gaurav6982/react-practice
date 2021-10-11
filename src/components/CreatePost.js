import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
function CreatePost() {
    const history = useHistory();
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const handleSubmit= ()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title:title,
            body:body,
            userId:1
        },{
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
          })
        .then(function (response) {
            alert("Post Created Successfully");
            setTimeout(function(){
                history.push("/");
            },1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <div className="center"> 
            <div className="card">
                <div className="card-header">
                    Create Post
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Title : </label> <br/>
                            <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Body : </label><br/>
                            <input type="textarea" className="form-control" value={body} onChange={e=>setBody(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={()=>handleSubmit()}>Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
