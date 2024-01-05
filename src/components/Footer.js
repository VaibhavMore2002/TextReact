// Footer.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = (props) => {
  return (
    <footer
      style={{
        padding: "15px",
        textAlign: "center",
        bottom: "0",
        width: "100%",
        position: "relative",
        backgroundColor: props.mode === "dark" ? "#333333" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <p>
        <a
          href="https://github.com/VaibhavMore2002"
          id="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-github"
            id="github-icon"
            style={{ fontSize: "24px" }}
          />{" "}
          Vaibhav More
        </a>
      </p>
      <p>&copy; 2024 TextReact. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
