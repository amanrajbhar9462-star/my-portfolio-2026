import "./Footer.css";
function Contact() {
  return (
    <footer>
      <div className="large_div">
        <div className="last_div">
          <h2 className="heading">Contact</h2>

          <form action="" className="my_form">
            <label>Your Name</label>
            <br />
            <input type="text" placeholder="What's your good name" />
          </form>

          <form action="" className="eml">
            <label>Your Email</label>
            <br />
            <input type="text" placeholder="What's your email" />
          </form>

          <form action="" className="my_form3">
            <label>Your Message</label>
            <br />
            <textarea placeholder="Enter your message"></textarea>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
