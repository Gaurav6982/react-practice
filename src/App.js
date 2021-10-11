
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Post from './components/Post';
function App() {
  const [posts,setPosts]=useState([]);
    useEffect(function(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            setPosts(posts=>response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },[])
  return (
    <BrowserRouter>
    <Nav/>
    <div className="App">
      <Switch>
        <Route exact path="/" component={()=><Home posts={posts}/>}/>
        <Route exact path="/posts/:id" component={()=><Post posts={posts}/>}/>
        <Route exact path="/create_post" component={CreatePost}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
