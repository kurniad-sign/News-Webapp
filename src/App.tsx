import React from "react";
import { Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import CarouselArticles from "./components/CarouselArticles";
import BusinessArticle from "./components/BusinessArticles";
import SportsArticles from "./components/SportsArticles";
import useNewsApi from "./hooks/useNewsApi";

const App: React.FunctionComponent = () => {
  const useBusinessArticle = useNewsApi(4, "business");
  const useSportsArticle = useNewsApi(4, "sports");

  console.log(useBusinessArticle);

  return (
    <>
      <header>
        <Navbar
          expand="md"
          light
          className="border-1 border-bottom border-secondary"
        >
          <NavbarBrand
            href="/"
            className="d-flex justify-content-center align-items-center w-100 fs-1 font-serif"
          >
            Today News
          </NavbarBrand>
        </Navbar>
      </header>

      <main>
        <section className="spacing-bottom-4 spacing-top-3">
          <Container>
            <Row>
              <Col>
                <CarouselArticles />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="spacing-5">
          <Container>
            <Row>
              <h2 className="mb-4">Top Business Articles</h2>
              {useBusinessArticle.map((article, index) => (
                <BusinessArticle {...article} key={index} />
              ))}
            </Row>
          </Container>
        </section>
        <section className="spacing-bottom-5">
          <Container>
            <Row>
              <h2 className="mb-4">Top Sports Articles</h2>
              {useSportsArticle.map((article, index) => (
                <SportsArticles {...article} key={index} />
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <footer>
        <p>Made with ❤ with Agung Kurniadi - Front-end Developer</p>
      </footer>
    </>
  );
};

export default App;
