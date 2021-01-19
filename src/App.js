import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
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
        <h1>You guy are just amazing </h1>
        <Post
          username="Kiran.sethu46"
          caption="lets do it"
          imageUrl="https://media.comicbook.com/2020/05/dragon-ball-super-when-will-should-goku-master-ultra-instinct-1219439.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
        />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
