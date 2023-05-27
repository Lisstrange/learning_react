import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import { PROPERTY_TYPES } from "@babel/types";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import { sort } from "semver";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "фф", body: "ьь" },
    { id: 2, title: "ыы 2", body: "вв" },
    { id: 3, title: "ррр 3", body: "яяы" },
  ]);

  // Сортировка
  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // const bodyInputRef = useRef(); Не управляемая хуйня

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
