import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div fluid className="footer">
      <h3>
        Designed and developed by
        <span> EK</span>
      </h3>

      <div className="footer-copywright">
        <h3>
          Copyright<span> ©</span> {year} <span> EK</span>
        </h3>
      </div>
      <div className="footer-body">
        <ul className="footer-icons">
          <a
            href="https://github.com/ekisler"
            className="text-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>

          <a
            className="twitter"
            href="https://twitter.com/ekracing"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            href="https://www.linkedin.com/in/emisael-kisler-fullstack/"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            className="twitter"
            href="https://www.instagram.com/kisler_tecnologia/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
