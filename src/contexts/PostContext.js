import React, { createContext, useEffect, useReducer } from 'react';
import { PostReducer } from '../reducers/PostReducer';

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, dispatch] = useReducer(PostReducer, [], () => {
        const localData = localStorage.getItem('posts');
        return localData ? JSON.parse(localData) : [];
    });
    //find current posts in local storage

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts]);
    //save new posts in local storage 

    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {props.children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
