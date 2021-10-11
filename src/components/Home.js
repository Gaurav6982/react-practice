import React from 'react'
import {Link} from 'react-router-dom'
function Home({posts}) {
    // console.log(posts);
    return (
        <div className="container">
            <h1>Home Page</h1>
            <div className="card">
            <div className="card-header">Available Posts</div>
            <div className="card-body">
            {
                posts.length===0?<div></div>:posts.map(post=>{
                    return (
                                <div className="card" key={post.id}>
                                    <Link to={`posts/${post.id}`} ><div className="card-body"> {post.title}</div></Link>
                                </div>
                            )
                })
            }
             </div>
            </div>
        </div>
    )
}

export default Home