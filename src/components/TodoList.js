import React, { useContext} from 'react'
import { TodoContext } from '../context/todoContext'

export const TodoList = ({
    todos 
}) => {
    const { state, dispatch
     } = useContext(TodoContext)
     
    const onDeleteHandler = index => {
        dispatch({type: 'DELETE_TODO', payload: index})
    }

    return (
        <div
            style={{
                position: 'relative',
                top: 110,
                height: 300,
                overflowY: 'scroll',
            }}
        >
            <ul>
                {
                    state.todos.map((todo, index) => <li 
                                                        key={index}
                                                        style={{ 
                                                            listStyle: 'circle',
                                                            fontSize: 24
                                                         }}
                                                        onClick={()=> onDeleteHandler(index)}
                                                    >
                                                        {todo}
                                                    </li>)
                }
            </ul>
        </div>
    )
}
