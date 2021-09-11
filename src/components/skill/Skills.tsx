import "./Skills.scss";

interface Props {
  skills: Array<string>;
}
function Skills({ skills }: Props) {
  return (
    <main className="skills container" id="skills">
      <div className="skills__wrapper">
        <div className="skills__media">
          <div>
            <h2>Skills & Tools</h2>
          </div>
          <div className="skills__list">
            {skills?.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
