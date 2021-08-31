import * as React from 'react';
import { render, screen } from "@testing-library/react"; 

import '@testing-library/jest-dom';

import App from '../../App';

test('full app rendering', () => {
    render(
        <App />
    )
    expect(screen.getByText('Today I Have')).toBeInTheDocument();

})
