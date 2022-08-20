import './App.scss';
import {useState} from "react";
import Todo from '../todo/Todo'

function App() {

    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <Todo
                todos={todos}
                setTodos={setTodos}
            />

        </div>
    );
}

export default App;
