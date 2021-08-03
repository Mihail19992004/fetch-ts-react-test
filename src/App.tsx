import React, {useEffect, useState} from 'react';
import {Header} from "./Components/Header";
import {PostList} from "./Components/PostList";
import {IAlbums, IComments, IPhotos, IPost, ITodos} from "./Types/interfaces";
import axios from "axios";
import {TodosList} from "./Components/Todos";
import {PhotoList} from "./Components/PhotoList";
import {AlbumList} from "./Components/AlbumList";
import {CommentList} from "./Components/CommentList";


function App() {

  const [posts, setPost] = useState<IPost[]>([])
  const [todos, setTodo] = useState<ITodos[]>([])
  const [photos, setPhoto] = useState<IPhotos[]>([])
  const [albums, setAlbum] = useState<IAlbums[]>([])
  const [comments, setComment] = useState<IComments[]>([])


  async function getPosts() {
    const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    setPost(response.data)
    console.log(posts)
  }

  async function getTodos() {
    const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos')
    setTodo(response.data)
  }
  async function getPhotos() {
    const response = await axios.get<IPhotos[]>('https://jsonplaceholder.typicode.com/photos')
    setPhoto(response.data)
  }
  async function getAlbums() {
    const response = await axios.get<IAlbums[]>('https://jsonplaceholder.typicode.com/albums')
    setAlbum(response.data)
  }
  async function getComments() {
    const response = await axios.get<IComments[]>('https://jsonplaceholder.typicode.com/comments')
    setComment(response.data)
  }

  useEffect(()=> {
    getPhotos()
    getPosts()
    getTodos()
    getAlbums()
    getComments()
  }, [])

  return (
    <div className="App">
    <Header />
    <div className="content">
      <PostList posts={posts} />
      <TodosList todos={todos} />
      <PhotoList photos={photos} />
      <AlbumList albums={albums} />
      <CommentList comments={comments} />
    </div>

    </div>
  );
}

export default App;
