import "./App.css";

function Info() {
  return (
    <>
      <section>
        <div className="main-section">
          <h1>Engin Barbaros Cobanoglu</h1>
          <h4>Frontend Developer</h4>
        </div>
      </section>

      <section>
        <div className="button-section">
          <button className="email-btn">
            <a target="_blank">
              <i className="fa-solid fa-envelope"></i>Email
            </a>
          </button>
          <button className="linkedin-btn">
            <a target="_blank">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </>
  );
}

function Interests() {
  return (
    <>
      <h2>Interests</h2>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </>
  );
}

function Main() {
  return (
    <main>
      <Info />
      <section>
        <div className="about-and-interests-section">
          <About />
          <Interests />
        </div>
      </section>
    </main>
  );
}

export default Main;