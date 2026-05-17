import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <p className="contact-kicker">Contact us</p>
        <h1>We are here to help with orders, delivery, and feedback.</h1>
        <p>
          Send us a message and our team will get back to you as soon as possible.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="tel" name="phone" placeholder="Phone number" required />
          </div>
          <input type="text" inputMode="email" name="email" placeholder="Email address" required />
          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              Select topic
            </option>
            <option value="order">Order support</option>
            <option value="delivery">Delivery question</option>
            <option value="feedback">Food feedback</option>
            <option value="business">Business inquiry</option>
          </select>
          <textarea name="message" placeholder="Write your message" rows="7" required />
          <button type="submit">Send message</button>
          {submitted && <p className="contact-success">Thanks. Your message has been received.</p>}
        </form>

        <aside className="contact-details">
          <div>
            <h2>Visit us</h2>
            <p>Tomato Kitchen, Colombo 03, Sri Lanka</p>
          </div>
          <div>
            <h2>Call</h2>
            <p>+94 77 123 4567</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>hello@tomato.lk</p>
          </div>
          <div>
            <h2>Hours</h2>
            <p>Every day, 9:00 AM - 10:00 PM</p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
