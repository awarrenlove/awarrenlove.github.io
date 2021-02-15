import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Title";

const Home = () => (
  <div className="mx-auto text-center max-w-6xl">
    <Title>Andrew Warren-Love</Title>
    <p className="text-xl my-2">
      I am a software engineer with almost a decade of full-time experience
      building full-stack solutions across multiple industries, from low level
      robotic firmware to full-stack web application development.
    </p>
    <p className="text-xl">
      I now work with Quartzy, a lab management and purchasing platform for
      scientific organizations, and I support growing businesses with their
      software needs with my fiancee under our partnership,{" "}
      <a href="https://codercouple.com/">
        Coder Couple{" "}
        <sup>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </sup>
      </a>
      .
    </p>
  </div>
);

export default Home;
