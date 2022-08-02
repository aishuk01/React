import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test("increments the count by one", () => {
  const newState = reducer({ count: 0 }, { type: "ADD" });
  expect(newState.count).toBe(1)
})