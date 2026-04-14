import "../../Assets/styles/Header/SkillsBar.css";

const SKILLS = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Git", "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Git"];

export default function SkillsBar() {
  return (
    <div className="skills-bar">
      <div className="skills-track">
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <span key={i} className="skill-btn">{skill}</span>
        ))}
      </div>
    </div>
  );
}
