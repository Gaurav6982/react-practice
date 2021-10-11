import React from 'react'
import { Link,useParams,useHistory } from 'react-router-dom'
function Post(props) {
    const params=useParams()
    const post=props.posts.filter(post=>post.id===parseInt(params.id))[0]
    const history=useHistory()
    return (
        <div className="center"> 
            <Link to="/">Back</Link>
        {
            post?(
                    <div className="card">
                        <div className="card-header">
                            {post.title}
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                    ):(
                    <div>{history.push("/home")}</div>
                )
            
            
        }
        </div>
        
    )
}

export default Post
