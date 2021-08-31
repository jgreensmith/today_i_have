import * as React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Auth from '../Auth/Auth';
import AuthContextProvider from '../../contexts/AuthContext';


test('should render auth', () => {
    render(
        <AuthContextProvider>
            <Auth />
        </AuthContextProvider>   
    )
})

