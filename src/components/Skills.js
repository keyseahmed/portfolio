function Skills() {
  const skills = [
    "C/C++",
    "JavaScript/TypeScript",
    "Python",
    "React",
    "AWS",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
  ];

  const sectionStyles = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    textAlign: "center",
  };

  const skillTagStyles = {
    display: "inline-block",
    margin: "5px",
    padding: "10px 15px",
    backgroundColor: "#007acc",
    color: "white",
    borderRadius: "15px",
    fontSize: "14px",
  };

  return (
    <section style={sectionStyles}>
      <h2>Technical Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <span key={index} style={skillTagStyles}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
