import React from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import useNewsApi from "../hooks/useNewsApi";

const CarouselArticles: React.FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [animating, setAnimating] = React.useState<boolean>(false);
  const useArticles = useNewsApi(5);
  const itemLength = useArticles.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = useArticles.map((article) => {
    return (
      <CarouselItem
        key={article.title}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={article.urlToImage} alt={article.title} />
        <CarouselCaption
          captionHeader={article.title}
          captionText={article.description}
          className="caption-text"
        />
        Baca Selengkapnya
      </CarouselItem>
    );
  });

  return (
    <Carousel
      previous={previousButton}
      next={nextButton}
      activeIndex={activeIndex}
    >
      <CarouselIndicators
        items={useArticles}
        activeIndex={activeIndex}
        onClickHandler={(newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }}
        className="indicator"
      />
      {carouselItemData}
      <CarouselControl
        directionText="Prev"
        direction="prev"
        onClickHandler={previousButton}
      />
      <CarouselControl
        directionText="Next"
        direction="next"
        onClickHandler={nextButton}
      />
    </Carousel>
  );
};

export default CarouselArticles;
