import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, deployed }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-links">
      </div>
      <div className="proj-imgbx">

        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="opener-links">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="Github">GitHub</a>}
            {deployed && <a href={deployed} target="_blank" rel="noopener noreferrer" className="Deployed">Deployed</a>}
          </div>
        </div>

      </div>
    </Col>
  )
}