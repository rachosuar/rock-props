import { React } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tablatalles from "../../img/tablatalles.png";

const Tablatalles = () => {
  return (
    <>
      <Container fluid="xl" className="tablatalles">
        <Row md="auto">
          <Col xl={12}>
            <Image src={tablatalles} width="80%" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tablatalles;
