import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex-col items-center my-10">
      <p className="font-mono text-center text-foreground/50 text-xs lg:text-sm">
        Public transportation data must be easily accessible to public
      </p>
      <div className="flex mx-auto justify-center my-5 space-x-5">
        <a
          href="https://github.com/dialkq/rute-krl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5"
            aria-label="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dialkq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5"
            aria-label="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
