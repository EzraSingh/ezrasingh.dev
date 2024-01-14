import { FaGithub, FaGitlab, FaGoogle, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/app/components";

export const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&source=mailto&to=";

export interface SocialProps {
  github?: string;
  gitlab?: string;
  linkedin?: string;
  email?: string;
}

export const Social: React.FC<SocialProps> = ({
  github,
  gitlab,
  linkedin,
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
  </ul>
);
