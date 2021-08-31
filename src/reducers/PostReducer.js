import { v4 as uuidv4 } from 'uuid';
import { ADD_POST, REMOVE_POST } from './constants';

export const PostReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            return [...state, {
                title: action.post.title,
                message: action.post.message,
                tags: action.post.tags,
                id: uuidv4() 
            }]
        case REMOVE_POST:
            return state.filter(post => post.id !== action.id)
        default:
            return state;
    }
}