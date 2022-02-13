import { render } from "@testing-library/react";
import SportsArticles from "../components/SportsArticles";

describe("Sports Article Component Rendered", () => {
  test("it renders", () => {
    render(
      <SportsArticles
        author={""}
        description={""}
        title={""}
        url={""}
        urlToImage={""}
      />
    );
  });
});
