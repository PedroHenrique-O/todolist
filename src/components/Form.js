import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) =>{

    const inputTextHandler = (e) =>{ 
        console.log(e.target.value)
        setInputText(e.target.value)
        
    }; 

    const submitTodoHandler = (e) =>{
        // envia as tarefas pro setTodos 
        e.preventDefault(); 
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
        ]) 
      // reseta state
        setInputText('');


    }

     const statusHandler = (e) =>{
         //console.log(e.target.value)
         setStatus(e.target.value)
     }
    return(
    <form>
          
        <input value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input" />

        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div  onChange={statusHandler} className="select">
          <select name="todos" className="filter-todo">
            <option value="all">Todas</option>
            <option value="completed">Feitos</option>
            <option value="uncompleted">A Fazer</option>
          </select>
        </div>
      </form>

    )
}

export default Form;