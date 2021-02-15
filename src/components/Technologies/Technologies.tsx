import { faReact } from "@fortawesome/free-brands-svg-icons";
import TechnologyTile from "./TechnologyTile";
import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dotnetLogo from "../../logos/dotnet-logo.svg";
import phpLogo from "../../logos/php.svg";
import laravelLogo from "../../logos/laravel.svg";

const Technologies = () => (
  <div className="mx-auto max-w-4xl">
    <Title>Technologies</Title>
    <div className="flex flex-col md:flex-row mt-8">
      <TechnologyTile title=".NET" href="https://dotnet.microsoft.com/">
        <img src={dotnetLogo} alt=".NET" />
      </TechnologyTile>
      <TechnologyTile title="PHP" href="https://www.php.net/">
        <img src={phpLogo} alt="PHP" />
      </TechnologyTile>
      <TechnologyTile title="Laravel" href="https://laravel.com/">
        <img src={laravelLogo} alt="Laravel" />
      </TechnologyTile>
      <TechnologyTile title="ReactJS" href="https://reactjs.org/">
        <FontAwesomeIcon className="text-9xl align-middle" icon={faReact} />
      </TechnologyTile>
    </div>
  </div>
);

export default Technologies;
