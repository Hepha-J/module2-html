function Contact() {
  return (
    <section className="card">
      <h2>Contact Me</h2>

      <form>

        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Name"
          />
        </label>

        <br /><br />

        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
          />
        </label>

        <br /><br />

        <label>
          <textarea placeholder="Message"></textarea>
        </label>

        <br /><br />

        <button type="submit" id="submitBtn">
          Send
        </button>

      </form>
    </section>
  );
}

export default Contact;