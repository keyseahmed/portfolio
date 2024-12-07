function Projects() {
  const projects = [
    {
      title: "Capstone Project: Seattle City Tour",
      description:
        "Developed a tour website using React, TypeScript, and PostgreSQL.",
      link: "#",
    },
    {
      title: "Daycare Website",
      description:
        "Created a full-featured daycare website using HTML, CSS, JavaScript, and PHP.",
      link: "#",
    },
  ];

  const sectionStyles = {
    backgroundColor: "white",
    padding: "20px",
  };

  const projectStyles = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    textAlign: "left",
    maxWidth: "400px",
  };

  const linkStyles = {
    color: "#007acc",
    textDecoration: "none",
  };

  return (
    <section style={sectionStyles}>
      <h2>Projects</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <div key={index} style={projectStyles}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={linkStyles}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
