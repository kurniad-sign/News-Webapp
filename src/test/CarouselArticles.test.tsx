import { render } from "@testing-library/react";
import CarouselArticles from "../components/CarouselArticles";

describe("Carousel Article Component Rendered", () => {
  test("it renders", () => {
    render(<CarouselArticles />);
  });
});
