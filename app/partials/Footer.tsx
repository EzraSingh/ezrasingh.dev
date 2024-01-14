import { HyperLink } from "@/app/components";

export const Footer = () => (
  <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 animate__animated animate__fadeIn animate__slow animate__delay-1s">
    <p>
      Based on&nbsp;
      <HyperLink href="https://brittanychiang.com/">
        Brittany Chiang&apos;s
      </HyperLink>
      &nbsp; elegant website. Built with{" "}
      <HyperLink href="https://nextjs.org/">Next.js</HyperLink> and{" "}
      <HyperLink href="https://tailwindcss.com/">TailwindCSS</HyperLink>,
      deployed with <HyperLink href="https://vercel.com/">Vercel</HyperLink>.
      All text is set in the{" "}
      <HyperLink href="https://fonts.google.com/specimen/Inter">
        Inter
      </HyperLink>{" "}
      typeface.
    </p>
  </footer>
);
