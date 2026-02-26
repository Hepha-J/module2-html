import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container">
    <section className="card1" id="skillsSection">
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      {visible && (
        <>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </>
      )}
    </section>
    </div>
  );
}

export default Skills;
