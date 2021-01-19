import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post_avatar"
          src="/static/images/avatar/1.jpg"
          alt="kiran "
        />

        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://media.comicbook.com/2020/05/dragon-ball-super-when-will-should-goku-master-ultra-instinct-1219439.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
        alt="goku"
      />
      <h4 className="post__text">
        <strong>Goku</strong> :My fav hero
      </h4>
    </div>
  );
}

export default Post;
