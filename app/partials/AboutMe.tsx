import { HyperLink, Section } from "@/app/components";

export const AboutMe = () => (
  <Section
    id="about"
    title="About me"
    className="animate__animated animate__fadeIn animate__slower animate__delay-1s lg:mb-16"
  >
    <p className="mb-4">
      My journey began in 2012 with tinkering and crafting mods for video game
      consoles, leading me into the fascinating world of coding and computer
      science. Over the years, I&apos;ve had the honor of building software for
      diverse companies, including an&nbsp;
      <HyperLink href="https://empirecapitalholdings.com/">
        investment firm
      </HyperLink>
      , a&nbsp;<HyperLink href="https://placemeter.com/">startup</HyperLink>,
      a&nbsp;
      <HyperLink href="https://www.dreambigfoundationinc.org/">
        community organization
      </HyperLink>
      , and a&nbsp;
      <HyperLink href="https://mongotel.com/">large corporation</HyperLink>.
    </p>
    <p className="mb-4">
      These days, my main concentration is on self-education in approaches for
      tackling complex problems. During my free time, I create and share lessons
      and tutorials on app development and devops.
    </p>
    <p>
      When I&apos;m not at my computer, I&apos;m usually playing the guitar,
      spending quality time with my partner, dog, and two cats, or reading about
      theoretical physics.
    </p>
  </Section>
);
