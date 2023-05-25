import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import { PROPERTY_TYPES } from "@babel/types";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("default");
  const [body, setBody] = useState("body");

  // const bodyInputRef = useRef(); Не управляемая хуйня

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now,
      title,
      body,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
    // console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/*НЕУправляемый компонент*/}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}

        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
