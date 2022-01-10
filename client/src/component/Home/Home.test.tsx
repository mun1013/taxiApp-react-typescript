import { fireEvent, render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('It should allow to change the location', () => {
    const { getByLabelText } = render(<Home/>);
    const radio = getByLabelText('Singapore');
    fireEvent.change(radio, {target: {value: "sg"}});
    expect((radio as HTMLInputElement).value).toEqual('sg');
  });

  test('It should allow to change the number of taxi using the slider', () => {
    const { getByRole } = render(<Home/>);
    const slider = getByRole('slider');
    fireEvent.change(slider, {target: {value: "2"}});
    expect((slider as HTMLInputElement).value).toEqual('2');
  })
})