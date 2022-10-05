import React, { useState } from "react";
import rypgif from "../../img/ryp.gif";
import { Container, Image, Row } from "react-bootstrap";
import { useEffect } from "react";
import ItemListContainer from "../ItemlistContainer/ItemsListContainer";

const Home = () => {
  let [homeimage, setHomeImage] = useState(true);

  useEffect(() => {
    let updateHome = () => {
      setTimeout(() => setHomeImage(false), 4000);
    };
    updateHome();
  }, []);

  return (
    <>
      {homeimage ? (
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Image
              src={rypgif}
              alt="imagen-home"
              style={{
                borderRadius: "200px",
                width: "120vw",
                border: "10px solid darkblue",
                pading: "0",
                backgroundColor: "blue",
              }}
            ></Image>
          </Row>
        </Container>
      ) : (
        <ItemListContainer />
      )}
    </>
  );
};

export default Home;
