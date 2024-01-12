import Image from "next/image";
import { ToolList } from "@/components";
import { RiArrowGoBackFill } from "react-icons/ri";

// @ts-ignore
import content from "@/content/projects.yml";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="lg:mx-32 md:mx-16">
      <header className="flex px-8 pt-8 items-center animate__animated animate__fadeInDown animate__faster">
        <Link
          href="/"
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
        >
          Go Back&nbsp;
          <span className="inline-block ml-2">
            <RiArrowGoBackFill />
          </span>
        </Link>
      </header>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 gap-4 p-8 animate__animated animate__fadeIn animate__slower">
        {content.portfolio.map(
          (project: {
            title: string;
            image: string;
            description: string;
            tools: string[];
          }) => (
            <li
              key={project.title}
              className="border border-slate-600 hover:border-slate-300 rounded p-10 transition motion-reduce:transition-none lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
            >
              <Image
                width={1000}
                height={64}
                src={project.image}
                alt={project.title}
                className="rounded"
                priority
              />
              <h2 className="my-4 capitalize text-2xl font-medium leading-snug text-slate-200 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {project.title}
              </h2>
              <p className="my-2 mb-4 mr-4">{project.description}</p>
              <ToolList tools={project.tools} />
            </li>
          )
        )}
      </ul>
    </main>
  );
}
