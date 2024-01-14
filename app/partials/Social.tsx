import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export const Social = () => (
  <ul className="ml-1 mt-8 flex items-center animate__animated animate__fadeIn animate__slower">
    <li className="mr-5 text-3xl">
      <a className="block hover:text-slate-200" target="_blank" href="#">
        <FaGithub />
      </a>
    </li>
    <li className="mr-5 text-3xl">
      <a className="block hover:text-slate-200" target="_blank" href="#">
        <FaGitlab />
      </a>
    </li>
    <li className="mr-5 text-3xl">
      <a className="block hover:text-slate-200" target="_blank" href="#">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);
