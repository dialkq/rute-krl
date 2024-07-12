import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full flex justify-center mx-auto my-10">
            <a href="https://github.com/dialkq/rute-krl-2" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5 mx-5" />
            </a>
            <a href="https://www.linkedin.com/in/dialkq/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-foreground/50 hover:text-foreground/100 cursor-pointer w-5 h-5 mx-5" />
            </a>
        </div>
    )
}

export default Footer;