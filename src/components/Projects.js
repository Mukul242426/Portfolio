import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1-img.jpg";
import projImg2 from "../assets/img/project2-img.jpg";
import projImg3 from "../assets/img/project3-img.jpg";
import projImg4 from "../assets/img/project4-img.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Super App",
      description:
        "Elevate your movie nights effortlessly with Super App's personalized genre recommendations, simplifying your choices for a richer cinematic experience.",
      imgUrl: projImg1,
      github: "https://github.com/Mukul242426/Movie-Suggestion-Application.git",
      deployed:
        "https://movie-suggestion-application-x9uifogje-mukulsmart26-gmailcom.vercel.app/",
    },
    {
      title: "Pocket Notes",
      description: "Versatile web app for organized note taking.",
      imgUrl: projImg2,
      github: "https://github.com/Mukul242426/Notes_Application.git",
      deployed: "https://notes-application-one.vercel.app/",
    },
    {
      title: "Jobfinder",
      description:
        "Refine your job hunt effortlessly. Browse tailored listings, personalize searches, and contribute as a registered user. Unlock your career potential with ease and style.",
      imgUrl: projImg3,
      github: "https://github.com/Mukul242426/Job-Listing-Client.git",
      deployed: "https://job-listing-client-five.vercel.app/",
    },
    {
      title: "Quizzie",
      description: "Effortlessly create, share, and track quizzes. Tailor timers, access analytics, and share quiz links for seamless engagement.",
      imgUrl: projImg4,
      github: "https://github.com/Mukul242426/Quizzie.git",
      deployed: "https://quizzie-lyart.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                         <p>Stay tuned for upcoming projects.</p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        <p>Stay tuned for upcoming projects.</p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
