import { TODO_ACTIONS } from "./actions.keys";

const initialState = {
    todoList:[]
}

export const todoReducer = (state=initialState, action) => {
    switch(action.type){

        case TODO_ACTIONS.ADD_TODO :
            return {todoList:[...state.todoList, action.payload]}

        case TODO_ACTIONS.CHANGE_STATUS :
            return { 
                todoList:[...state.todoList.map((el) =>
                    el.id === action.payload ? {...el, isCompleted:!el.isCompleted} : el
                )]
            }
            
        case TODO_ACTIONS.DLETE_TODO :
            return {
                todoList:[...state.todoList.filter((el) => el.id !== action.payload )]
            }

        default :
            return state
    }
    
}