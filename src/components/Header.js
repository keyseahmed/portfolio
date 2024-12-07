function Header() {
  const headerStyles = {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  const linkStyles = {
    color: "#61dafb",
    margin: "0 10px",
    textDecoration: "none",
  };

  return (
    <header style={headerStyles}>
      <h1>Keyse Ahmed</h1>
      <p>Full Stack Developer | Cloud Enthusiast</p>
      <div>
        <a
          href="https://www.linkedin.com/in/ahmedkeyse/"
          style={linkStyles}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        |
        <a
          href="https://github.com/keyseahmed"
          style={linkStyles}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        |
        <a
          href="mailto:keyse206@gmail.com"
          style={linkStyles}
        >
          Email
        </a>
      </div>
    </header>
  );
}

export default Header;
