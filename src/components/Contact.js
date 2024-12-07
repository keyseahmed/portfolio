function Contact() {
  const sectionStyles = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007acc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <section style={sectionStyles}>
      <h2>Contact Me</h2>
      <form style={formStyles}>
        <input type="text" placeholder="Name" style={inputStyles} />
        <input type="email" placeholder="Email" style={inputStyles} />
        <textarea
          placeholder="Message"
          rows="4"
          style={{ ...inputStyles, resize: "none" }}
        ></textarea>
        <button type="submit" style={buttonStyles}>
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
