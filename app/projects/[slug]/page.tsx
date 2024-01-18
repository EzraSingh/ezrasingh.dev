"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import cx from "classnames";
import { SplitLayout, ToolList } from "@/app/components";
// @ts-ignore
import content from "@/app/content/projects.yml";

const galleryClass = cx(
  "-ml-20",
  "-mr-4",
  "lg:ml-0",
  "lg:mr-0",
  "lg:flex",
  "lg:max-h-screen",
  "lg:w-1/2",
  "lg:flex-col",
  "lg:justify-between",
  "lg:order-last",
  "lg:z-40"
);

const titleClass = cx(
  "text-4xl",
  "font-bold",
  "tracking-tight",
  "text-slate-200",
  "sm:text-5xl",
  "mb-8"
);

const subtitleClass = cx(
  "mt-3",
  "text-lg",
  "font-medium",
  "tracking-tight",
  "text-slate-200",
  "sm:text-xl"
);

const headerClass = cx(
  "sticky",
  "top-0",
  "z-20",
  "-mx-6",
  "mb-4",
  "w-screen",
  "bg-slate-900/75",
  "px-6",
  "py-5",
  "backdrop-blur",
  "md:-mx-12",
  "md:px-12",
  "lg:bg-none",
  "lg:relative"
);

const linkClass = cx(
  "capitalize",
  "font-medium",
  "text-slate-200",
  "hover:text-teal-300",
  "focus-visible:text-teal-300",
  "hover:underline",
  "inline-flex",
  "items-center"
);

export default function CaseStudy({ params }: PageProps) {
  const router = useRouter();
  const projectSlug = params.slug;
  const project = content.studies[projectSlug];
  const [caseStudy, setCaseStudy] = useState<JSX.Element>(<></>);
  useEffect(() => {
    const importMdxDoc = async () => {
      const doc = await import(`../../content/studies/${projectSlug}.mdx`);
      const Content = doc.default;
      setCaseStudy(<Content />);
    };
    importMdxDoc();
  }, [projectSlug]);

  if (!project) {
    router.replace("/");
    return <></>;
  }

  return (
    <>
      <div className="max-w-screen-xl flex gap-8 mx-auto pt-6 px-6 -mb-4 lg:pb-8 md:px-12 lg:px-24">
        <Link href="/projects" className={linkClass}>
          view projects&nbsp;
          <span className="inline-block ml-2">
            <RiArrowGoBackFill />
          </span>
        </Link>
        <Link href="/" className={linkClass}>
          go home&nbsp;
          <span className="inline-block ml-2">{"/"}</span>
        </Link>
      </div>
      <SplitLayout>
        <aside className={galleryClass}>
          <figure className="inline-block lg:sticky lg:top-16">
            {project.preview ? (
              <video width={1000} height={500} autoPlay loop muted playsInline>
                <source src={project.preview} type="video/mp4" />
              </video>
            ) : (
              <Image
                width={1000}
                height={500}
                src={project.image}
                alt={project.title}
                className="shadow-xl rounded-lg"
              />
            )}
          </figure>
        </aside>
        <main className="lg:w-1/2 animate__animated animate__fadeIn">
          <header className={headerClass}>
            <h1 className={titleClass}>{project.title}</h1>
            <h2 className={subtitleClass}>{project.subtitle}</h2>
            <ToolList tools={project.tools} className="my-8" />
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 hover:underline focus-visible:text-teal-300 group/link text-base"
              href="#"
              target="_blank"
            >
              <span className="flex items-center capitalize">
                visit project
                <span className="inline-block lg:ml-4 ml-2">
                  <FiExternalLink />
                </span>
              </span>
            </a>
          </header>
          <hr className="my-8 w-5/6 opacity-10" />
          <div className="md pr-6 lg:pr-12">{caseStudy}</div>
        </main>
      </SplitLayout>
    </>
  );
}
