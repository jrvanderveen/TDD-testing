import * as React from "react"
import { render } from '@testing-library/react';
import App from './App';

test('Renders correct content', () => {
  const { getByText } = render(<App />);

  getByText("Phones Phones Phones")
  getByText("Add Phone")
  getByText("Get Phone By Id")
  getByText("Get Phone By Make/Model")
  getByText("Delete Phone")

});

test('User can click links and be redirected to correct page', () => {


})
