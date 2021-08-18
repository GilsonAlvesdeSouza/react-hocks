import {render, screen} from '@testing-library/react';
import Button from "./index";

const values = {
    text: "Quote No Jutsu",
}

test('render button and text', () => {
    render(<Button>{values.text}</Button>);
    const buttonEL = screen.getByText(values.text);

    expect(buttonEL).toBeInTheDocument();
});

