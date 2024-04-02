import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import art6 from "../assets/proj/art6.jpg";
import tD from "../assets/proj/3D.jpg";
import poster from "../assets/proj/poster.png";
import bc from "../assets/proj/bookCover.png";
import art4 from "../assets/proj/art4.jpg";
import logo from "../assets/proj/logo.png";
import art3 from "../assets/proj/art3.jpg";
import art2 from "../assets/proj/art2.jpg";
import art1 from "../assets/proj/art1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "3D Isometric Room",
            description: "3D Modeling",
            imgUrl: tD,
          },
        {
          title: "When the last Autumn leaf fall",
          description: "Manga Art Cover",
          imgUrl: art1,
        },
        {
            title: "CalmScape",
            description: "Poster",
            imgUrl: poster,
          },
      ];
    
      const tab2 = [
          {
            title: "Book Cover",
            description: "Design",
            imgUrl: bc,
          },
          {
            title: "Art",
            description: "Design & Development",
            imgUrl: art4,
          },
          {
            title: "Manga Cover",
            description: "Design & Development",
            imgUrl: art6,
          },
      ]

      const tab3 =[
        {
          title: "App logo",
          description: "Design",
          imgUrl: logo,
        },
        {
          title: "Art",
          description: "Design & Development",
          imgUrl: art3,
        },
        {
          title: "Art",
          description: "Design & Development",
          imgUrl: art2,
        },
    ]

    return(
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Here are my works/projects</p>
            <Tab.Container id = "projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
                <Nav.Link eventKey="first">One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third">Three </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                    <Row>
                    {
                          tab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                          tab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                </Tab.Pane>
                
                <Tab.Pane eventKey="third">
                <Row>
                    {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
            </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )

}