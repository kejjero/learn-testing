function Task({index, todo, onClickDeleteTodo}) {
    return (
        <li
            key={index}
        >
            <button onClick={() => onClickDeleteTodo(index)}>x</button>
            <p>{todo}</p>
        </li>
    )
}

export default Task;