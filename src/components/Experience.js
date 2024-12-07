function Experience() {
  const experiences = [
    {
      company: "Amazon",
      role: "Full Stack Software Development Intern",
      duration: "June 2023 – September 2023",
      description:
        "Developed a message exchange application using React, TypeScript, and AWS.",
    },
    {
      company: "Securitas at Amazon",
      role: "Security Operations Center Operator",
      duration: "January 2023 – Present",
      description:
        "Managed access to Amazon systems using security protocols and tools.",
    },
  ];

  const sectionStyles = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
  };

  const experienceCardStyles = {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
  };

  return (
    <section style={sectionStyles}>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={experienceCardStyles}>
          <h3>{exp.company}</h3>
          <h4>{exp.role}</h4>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
