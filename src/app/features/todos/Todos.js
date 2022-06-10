import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';


const Todos = () => {

    const {isLoading,todos,error}=useSelector(state=>state.todos);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos())
    },[dispatch])

    

    return (
        <div>
            <p>Todos</p>

            {isLoading && <h3>Loading...</h3>}
            {error && <p>{error}</p>}
            {todos && todos.map((todo,index)=>{
                return <article key={index}>
                    <p>{todo.title}</p>
                </article>
            })}
            
        </div>
    );
};

export default Todos;