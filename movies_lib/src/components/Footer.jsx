import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../Styles/components/Footer.css";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <p className="movie-lib-footer" onClick={backToTop}>
        Movies_Lib &copy;
      </p>

      <ul className="social-list">
        <li>
          <a href="mailto:levybholanda@gmail.com">
            <MdEmail />
          </a>
        </li>
        <li>
          <a href="https://github.com/Levyhb" target="_blanck">
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/levy-bezerra-holanda/"
            target="_blanck"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>

      <p className="developed">
        {" "}
        Developed by <a href="https://github.com/Levyhb">Levy Bezerra</a>
      </p>
    </div>
  );
}
