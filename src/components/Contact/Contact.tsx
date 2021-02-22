import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../Title";

const Contact = () => (
  <>
    <Title>Contact</Title>
    <p className="text-center text-xl">
      Thank you for visiting! For any consulting requests, please contact me
      through{" "}
      <a href="https://codercouple.com/contact">
        Coder Couple{" "}
        <sup>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </sup>
      </a>
    </p>
  </>
);

export default Contact;
