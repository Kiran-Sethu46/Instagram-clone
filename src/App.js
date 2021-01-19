import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Post from "./Post";

function App() {
  const [post, setPost] = useState([]);
  // useEffect (() => {db.collection('posts').onSnapshot(snapshot=>{setPost.docs.map(doc => doc.data())}, [])
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(post);
  return (
    <div>
      <div className="App">
        <div className="app__header">
          <img
            className="image__header"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </div>

        {/* <Post
          username="Kiran.sethu46"
          caption="lets do it"
          imageurl="https://media.comicbook.com/2020/05/dragon-ball-super-when-will-should-goku-master-ultra-instinct-1219439.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
        />
        <Post
          username="Justin varghese"
          caption="waah btc "
          imageurl="https://i.redd.it/bzzelaqwogi31.jpg"
        />
        <Post />
        <Post /> */}
        {post.map((post) => (
          <Post
            username={post.username}
            caption={post.username}
            imageurl={post.imageurl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
