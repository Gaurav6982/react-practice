
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CreateTodo from './components/CreateTodo';
import MyTodo from './components/MyTodo';
import Post from './components/Post';
function App() {
  const [posts,setPosts]=useState([]);
  const [todo,setTodo]=useState(localStorage.getItem("todos")!=null?JSON.parse(localStorage.getItem("todos")):[]);
    useEffect(function(){
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
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
        <Route exact path="/create_my_todo" component={()=><CreateTodo todos={todo}  setTodo={setTodo}/>}/>
        <Route exact path="/show_todo" component={()=><MyTodo todos={todo}/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
