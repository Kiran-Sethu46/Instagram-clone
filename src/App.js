import { Button, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Post from "./Post";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [ModalStyle] = useState(getModalStyle);
  const classes = useStyles();

  // useEffect (() => {db.collection('posts').onSnapshot(snapshot=>{setPost.docs.map(doc => doc.data())}, [])
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  const signUp = (e) => {
    e.preventDefault();
  };

  console.info(post);
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={ModalStyle} className={classes.paper}>
          <h2>I am the kl</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="image__header"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <Button onClick={}></Button>
      <h1>Thank you bro </h1>

      {post.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageurl={post.imageurl}
        />
      ))}
    </div>
  );
}

export default App;
