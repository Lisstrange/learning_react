import React, {useState} from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])

    const [title, SetTitle] = useState('default')
    const addNewPost = () => {
        return (<div>Мемы</div>)
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title} type='text' placeholder='Название поста'/>
                <MyInput type='text' placeholder='Описание поста'/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
