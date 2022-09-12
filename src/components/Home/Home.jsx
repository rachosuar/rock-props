import React, { useState } from "react";
import rypgif from "../../img/ryp.gif";
import { Container, Image, Row, Col, Card, CardImg } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let [homeimage, setHomeImage] = useState(true);

  useEffect(() => {
    let updateHome = () => {
      setTimeout(() => setHomeImage(false), 3000);
    };
    updateHome();
  }, []);

  return (
    <>
      {homeimage ? (
        <Image
          src={rypgif}
          alt="imagen-home"
          style={{ borderRadius: "20px" }}
        ></Image>
      ) : (
        <Container fluid="md" className="home">
          <Row md="auto">
            <Col style={{ alignSelf: "center" }}>
              <Card
                className="card cardstyle"
                style={{
                  borderRadius: "30px",
                  border: "2px solid blue",
                  boxShadow: "5px 5px 10px black",
                }}
              >
                <Link to={`/categoria/props`}>
                  <CardImg
                    variant="top"
                    src={rypgif}
                    style={{
                      height: "25rem",
                      borderRadius: "30px",
                    }}
                  />
                </Link>

                <Card.Body>
                  <Card.Title className="card__name">"Props"</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
