import Task from "../task/Task";
import {useState} from "react";

function Todo({todos, setTodos}) {


    const [value, setValue] = useState('');

    function onClickAddTodo(evt) {
        evt.preventDefault();
        setTodos([...todos, value])
        setValue('')
    }

    function onClickDeleteTodo(indexTodo) {
        const newTodo = todos.filter((_, currentIndex) => currentIndex !== indexTodo);
        setTodos(newTodo)

    }

    if (!todos) return null

    return (
        <div className="todo">
            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <Task
                                key={index}
                                index={index}
                                todo={todo}
                                onClickDeleteTodo={onClickDeleteTodo}
                            />
                        )
                    })
                }
            </ul>
            <form className="todo__form">
                <input type="text" value={value} onChange={(evt) => setValue(evt.target.value)}/>
                <button
                    onClick={(evt) => onClickAddTodo(evt)}
                >
                    Добавить задачу
                </button>
            </form>
        </div>
    )
}

export default Todo;