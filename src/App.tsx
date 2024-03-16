import { Typography, Divider } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWeplQe5pVySan-Up39bbvk3t7UZDSsN0",
  authDomain: "kane-todo-redux.firebaseapp.com",
  projectId: "kane-todo-redux",
  storageBucket: "kane-todo-redux.appspot.com",
  messagingSenderId: "1044972861790",
  appId: "1:1044972861790:web:4e57df7c793bac63f877cf",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
