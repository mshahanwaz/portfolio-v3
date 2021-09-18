import moment from "moment";
import React from "react";
import "./EachProject.scss";

interface Props {
  project: any;
}

function EachProject({ project }: Props) {
  // console.log(project);
  const { image, date, title, subtitle, github, link, description, tags } =
    project;
  return (
    <div className="eachProject">
      <img src={image} alt="" />
      <div className="eachProject__details">
        <div className="eachProject__head">
          <h2>
            {title}
            <span>{subtitle}</span>
          </h2>
          <span>{moment.unix(date.seconds).format("DD MMM, YYYY")}</span>
        </div>
        <div className="eachProject__tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <p className="eachProject__description">{description}</p>
        <div className="eachProject__links">
          <a href={github} target="_blank" rel="noreferrer noopener">
            <i className="bi bi-github" />
          </a>
          <a href={link} target="_blank" rel="noreferrer noopener">
            <i className="bi bi-arrow-up-right-square" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default EachProject;
