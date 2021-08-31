import * as React from 'react';
import { render } from "@testing-library/react";
import Posts from '../Posts/Posts';
import PostContextProvider from '../../contexts/PostContext';

import '@testing-library/jest-dom'



test('should display posts', () => {
    const post = {title: 'blah', message: 'blahb', tags: 'blub', id: 1}
    render(
        <PostContextProvider>
            <Posts post={post}/>
        </PostContextProvider>
    )
    expect.toHaveTextContent('blub');
})