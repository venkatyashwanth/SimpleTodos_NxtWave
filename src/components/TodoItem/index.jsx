import "./index.css";

const TodoItem = (props) => {
    const { todoItem,deleteHandler } = props;
    const onDeleteItem = () => {
        deleteHandler(todoItem.id)
    }
    return (
        <>
            <li className="todo-item">
                <p className="todo-title">
                    {todoItem.title}
                </p>
                <button type="button" className="dltBtn" onClick={onDeleteItem}>Delete</button>
            </li>
        </>
    )
}

export default TodoItem