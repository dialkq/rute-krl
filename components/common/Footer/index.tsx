import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex-row justify-center mx-auto my-10">
      <div className="flex mx-auto justify-center">
        <p className="font-mono text-foreground/50 text-xs lg:text-sm text-center">
          Public transportation data must be easily accessible to public
        </p>
      </div>
      <div className="flex mx-auto justify-center my-5">
        <a
          href="https://github.com/dialkq/rute-krl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5 mx-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/dialkq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5 mx-5" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
