import "./Footer.css";

function Contact() {
  return (
    <footer>
      <div className="large_div">
        <div className="last_div">
          <h2 className="heading">Contact</h2>

          <form className="contact-form">
            <div className="my_form">
              <label>Your Name</label>
              <br />
              <input type="text" placeholder="What's your good name" required />
            </div>

            <div className="eml">
              <label>Your Email</label>
              <br />
              <input type="email" placeholder="What's your email" required />
            </div>

            <div className="my_form3">
              <label>Your Message</label>
              <br />
              <textarea placeholder="Enter your message" required></textarea>

              <button type="button" className="send-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
