import React from "react";
import CardItem from "./card";
import { Container } from "react-bootstrap";

function AboutMe() {
  const aboutMeData = [
    {
      id: 1,
      title: "title1",
      text: "text1",
      image: "image1",
    },
    {
      id: 2,
      title: "title2",
      text: "text2",
      image: "image2",
    },
    {
      id: 3,
      title: "title2",
      text: "text2",
      image: "image2",
    },
  ];

  const aboutMeText =
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  return (
    <div id="_aboutMe">
      <div id="aboutMe">
        <Container fluid>
          <div className="row">
            <div className="col-lg" id="aboutMe-text">
              <p id="header">About ME</p>
              <p id="text">{aboutMeText}</p>
            </div>
            <div className="col-lg" id="aboutMe-img"></div>
          </div>
        </Container>
        <Container fluid>
          <div className="row">
            {aboutMeData.map((item) => (
              <CardItem key={item.id} item={item}></CardItem>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutMe;
