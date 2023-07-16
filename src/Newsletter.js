import React from 'react';

const Newsletter = () => {
  return (
    <footer id="footer" className="footer">
      <h2 id="newsletter">Newsletter</h2>
      <p>Sign up for our newsletter. It's free!</p>
      <div className="form">
        <form
          action="https://formsubmit.co/noah.sparkes19@gmail.com"
          method="POST"
        >
          <p>
            <input type="text" name="name" required placeholder="Name*" />
          </p>
          <p>
            <input type="email" name="email" required placeholder="Email*" />
          </p>
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    </footer>
  );
};

export default Newsletter;
