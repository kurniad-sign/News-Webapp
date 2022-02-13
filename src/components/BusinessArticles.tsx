import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";

interface Props {
  author: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
}

const BusinessArticle: React.FunctionComponent<Props> = ({
  author,
  description,
  title,
  url,
  urlToImage,
}) => {
  return (
    <>
      <Col md="6" className="mb-5">
        <Card className="h-100">
          <CardImg
            alt={author}
            src={urlToImage}
            width="100%"
            top
            height="100%"
          />
          <CardBody>
            <CardTitle tag="h4" className="mb-4">
              {title}
            </CardTitle>
            <CardText>{description}</CardText>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Baca Selengkapnya
            </a>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default BusinessArticle;
