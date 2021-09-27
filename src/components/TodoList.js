import react from "react";
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) =>{
    //console.log(filteredTodos)
    

    return(
        

    <div className="todo-container">
    <ul className="todo-list">
        {filteredTodos.map((todo)=> (
            <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            id = {todo.id}
            todo = {todo}
            key = {todo.id}

            
            />
        ))}
        


    </ul>
  </div>
    )
}

export default TodoList;
