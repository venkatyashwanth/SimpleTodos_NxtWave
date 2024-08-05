import { Component } from "react";
import "./index.css";
import TodoItem from "../TodoItem";

const initialTodosList = [
    {
        id: 1,
        title: 'Book the ticket for today evening',
    },
    {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
    },
    {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
    },
    {
        id: 5,
        title: 'Order fruits on Big Basket',
    },
    {
        id: 6,
        title: 'Fix the production issue',
    },
    {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
    },
    {
        id: 8,
        title: 'Get essentials for Sunday car wash',
    },
]


class SimpleTodos extends Component {
    state = {
        todoList: initialTodosList
    }
    handleDelete = uniqueNo => {
        const { todoList } = this.state;
        const filteredTodos = todoList.filter(each => each.id !== uniqueNo)
        this.setState({
            todoList: filteredTodos
        })
    }

    render() {
        const { todoList } = this.state;

        return (
            <>
                <div className="appContainer">
                    <div className="app-content">
                        <h1 className="heading">Simple Todos</h1>
                        <ul className="todo-list">
                            {
                                todoList.map((todoEl) =>
                                    <TodoItem key={todoEl.id} todoItem={todoEl} deleteHandler={this.handleDelete} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default SimpleTodos;