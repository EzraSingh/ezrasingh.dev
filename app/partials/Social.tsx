import {
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import { SocialLink } from "@/app/components";

const GMAIL_URL = "https://mail.google.com/mail/?view=cm&source=mailto&to=";

export interface SocialProps {
  github?: string;
  gitlab?: string;
  linkedin?: string;
  medium?: string;
  email?: string;
}

export const Social: React.FC<SocialProps> = ({
  github,
  gitlab,
  linkedin,
  medium,
  email,
}) => (
  <ul className="z-30 ml-1 mt-8 flex items-center animate__animated animate__fadeIn animate__slower animate__delay-1s">
    <SocialLink href={github}>
      <FaGithub />
    </SocialLink>
    <SocialLink href={gitlab}>
      <FaGitlab />
    </SocialLink>
    <SocialLink href={linkedin}>
      <FaLinkedin />
    </SocialLink>
    {email && (
      <SocialLink href={GMAIL_URL + email}>
        <FaGoogle />
      </SocialLink>
    )}
    <SocialLink href={medium}>
      <FaMedium />
    </SocialLink>
  </ul>
);
