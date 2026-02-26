function About() {
  return (
    <section className="card">
      <h2>About Me</h2>

      <img
        src="src/assets/images/profile.jpg"
        alt="Profile photo"
      />

      <p>I like APPLES :D</p>

      <p>
        Email:
        <a href="mailto:sambajon.jaziruzman@gmail.com">
          sambajon.jaziruzman@gmail.com
        </a>
        <br />

        GitHub:
        <a
          href="https://github.com/Hepha-J"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Hepha-J
        </a>
      </p>
    </section>
  );
}

export default About;