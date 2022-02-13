import { render, screen } from "@testing-library/react";
import App from "../App";

test("rendered App Component", () => {
  render(<App />);
});
test("renders Top Sports Article Header", () => {
  render(<App />);
  const linkElement = screen.getByText(/top sports article/i);
  expect(linkElement).toBeInTheDocument();
});
