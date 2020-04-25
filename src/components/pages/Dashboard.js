import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";
//image resources for grade 9 math
import relationAndFunc from "../../img/relation-and-functions.svg";
import geometry from "../../img/measurement-and-geometry.svg";
import vectors from "../../img/vectors-in-two-dimension.svg";
import vennDiagram from "../../img/venn-diagram.svg";
import statistics from "../../img/statistics.svg";
import numberSystems from "../../img/number-systems.svg";
import solnOfEquation from "../../img/quadratic-equation-solution.svg";

//image resources for grade 9 math
import polynomialFunc from "../../img/polynomial functions.svg";
import expFuncAndLogFunc from "../../img/Logarithm_vs_exponential_functions.svg";
import solvingInequalities from "../../img/vectors-in-two-dimension.svg";
import coordinateGeometry from "../../img/coordinate-geometry.svg";
import trigonometricFunc from "../../img/Trigonometric_Functions_compare.svg";
import planeGeometry from "../../img/plane geometry.svg";
import solidGeometry from "../../img/solid-geometry.svg";

const Dashboard = () => {
  const { topicId } = useParams();
  return (
    <Container className="dashboard" style={{ marginBottom: "20px" }}>
      <Card.Group itemsPerRow={3}>
        <Card
          raised
          header="Number Systems"
          image={numberSystems}
          href="/subtopics"
          //TODO:use useParams hook to handle fetching subtopics by topic id
          // onClick={(event, data) => {
          //   console.log({ event, header: data.header });
          //   return alert("you clicked me");
          // }}
        />
        {/* grade nine math */}
        <Card
          raised
          header="Set Theory"
          image={vennDiagram}
          href={`/topics/${topicId}`}
        />
        <Card raised header="Statistics and Probability" image={statistics} />
        <Card raised header="Relations and Functions" image={relationAndFunc} />
        <Card raised header="Solutions of Equations" image={solnOfEquation} />
        <Card raised header="Measurement and Geometry" image={geometry} />
        <Card raised header="Vectors in two Dimensions" image={vectors} />
        {/* grade 10 math */}
        <Card raised header="Polynomial Functions" image={polynomialFunc} />
        <Card
          raised
          header=" Exponential and Logarithmic Functions "
          image={expFuncAndLogFunc}
        />
        <Card
          raised
          header="Solving Inequalities"
          image={solvingInequalities}
        />
        <Card raised header="Coordinate Geometry" image={coordinateGeometry} />
        <Card
          raised
          header="Trigonometric Functions "
          image={trigonometricFunc}
        />
        <Card raised header="Plane Geometry" image={planeGeometry} />
        <Card raised header="Solid Geometry" image={solidGeometry} />
        {/* polynomialFunc
         */}
      </Card.Group>
    </Container>
  );
};

export default Dashboard;
