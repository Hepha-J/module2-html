import profileImg from "../assets/images/profile.jpg";
import Card from "./Card";

function About() {
  return (
    <Card title="About Me">

      <img
        src={profileImg}
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
    </Card>
  );
}

export default About;
