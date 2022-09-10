import React from "react";

export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/success">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="yourname">Your Name:</label> <br />
        <input
          type="text"
          name="name"
          id="yourname"
          placeholder="Your name here"
          className="input input-bordered input-md  w-full"
        />
      </div>
      <div>
        <label htmlFor="youremail">Your Emeail:</label> <br />
        <input
          type="email"
          name="email"
          id="youremail"
          placeholder="Your mail here"
          className="input input-bordered input-md  w-full"
        />
      </div>
      <div>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea
          name="message"
          id="yourmessage"
          className="input input-bordered input-md  w-full"
        ></textarea>
      </div>
      <div style={{ textAlign: "right" }}>
        <button type="submit" className="btn btn-wide btn-primary">
          Send
        </button>
      </div>
    </form>
  );
}
