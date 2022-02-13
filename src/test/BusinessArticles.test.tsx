import { render } from "@testing-library/react";
import BusinessArticles from "../components/BusinessArticles";

describe("Business Article Component Rendered", () => {
  test("it renders", () => {
    render(
      <BusinessArticles
        author={""}
        description={""}
        title={""}
        url={""}
        urlToImage={""}
      />
    );
  });
});
