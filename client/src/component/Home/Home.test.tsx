import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from './Home';

describe('Home Component', () => {
  test('It should allow to change the location', () => {
    // render(<Home/>);

    // const radioLabel = screen.getByRole('radio');
    // expect(radioLabel).toEqual(false);
    // fireEvent.click(radioLabel);
    // expect(radioLabel).toEqual(true);

    const { getByLabelText } = render(<Home/>);
    const radio = getByLabelText('Singapore');
    fireEvent.change(radio, {target: {value: "sg"}});
    expect(radio).toBe('sg');
  })
})