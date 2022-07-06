import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anasportfolio from "../../Assets/Projects/anasportfolio.PNG";
import error from "../../Assets/Projects/error.PNG";
import login from "../../Assets/Projects/login.PNG";
import meta from "../../Assets/Projects/meta.PNG";
import todolist from "../../Assets/Projects/todolist.PNG";
import news from "../../Assets/Projects/news.PNG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Page of Goddard Discovery"
              description="I have contributed in Goddard discovery website and customized it's news page."
              link="https://github.com/MuhammadAnus5081/newspage"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title="meta-bazaar"
              description="I created this web by using wordpress elementor tool."
              link="https://meta-bazaar.com"
        
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={error}
              isBlog={false}
              title="Page 404 Error"
              description="I create this page by using JS and Bootstrap for user to show error."
              link="https://github.com/MuhammadAnus5081/page-404-error"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anasportfolio}
              isBlog={false}
              title="Simple my own portfolio"
              description="This is my first webpage when i was just going to start learning Front end. This web is based simple HTML and CSS."
              link1="https://github.com/MuhammadAnus5081/anas-portfolio"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todolist"
              description="This web is based on simple html5,css3,javascript and bootstarp."
              link="https://github.com/MuhammadAnus5081/Todo-list"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Facebook Login page"
              description="Login page contain simple UI similar to Facebool official login page."
              link="https://github.com/MuhammadAnus5081/FB-login-page"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
