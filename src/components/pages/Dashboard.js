import React from "react";
import { Card, Container } from "semantic-ui-react";
// import src  "../../img/function.png";
// import src from "../../img/function.png";
// import power from "../../img/power.png";
import relationAndFunc from "../../img/relation-and-functions.svg";
import geometry from "../../img/measurement-and-geometry.svg";
import vectors from "../../img/vectors-in-two-dimension.svg";
import vennDiagram from "../../img/venn-diagram.svg";
import statistics from "../../img/statistics.svg";
import numberSystems from "../../img/number-systems.svg";
import solnOfEquation from "../../img/rKYWUIE9RNePWaphZyWS_Quadratic_root.svg";
// const src = "/images/wireframe/white-image.png";

const Dashboard = () => (
  <Container>
    <Card.Group itemsPerRow={3} centered>
      <Card
        raised
        header="Number Systems"
        image={numberSystems}
        onClick={(event, data) => {
          console.log({ event, header: data.header });
          return alert("you clicked me");
        }}
      />
      <Card
        className="math-card"
        raised
        header="Set Theory"
        image={vennDiagram}
      />
      <Card
        className="math-card"
        raised
        header="Statistics and Probability"
        image={statistics}
      />
      <Card
        className="math-card"
        raised
        header="Relations and Functions"
        image={relationAndFunc}
      />
      <Card
        centered
        raised
        header="Solutions of Equations"
        image={solnOfEquation}
      />
      <Card
        className="math-card"
        raised
        header="Measurement and Geometry"
        image={geometry}
      />
      <Card
        className="math-card"
        raised
        header="Vectors in two Dimensions"
        image={vectors}
      />
    </Card.Group>
  </Container>
);

export default Dashboard;
