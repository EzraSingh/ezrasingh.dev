import Image from "next/image";
import { ToolList } from "@/components";

// @ts-ignore
import content from "@/content/projects.yml";

export default function Projects() {
  return (
    <main className="lg:mx-32 md:mx-16">
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 gap-4 p-8">
        {content.portfolio.map(
          (project: {
            title: string;
            image: string;
            description: string;
            tools: string[];
          }) => (
            <li key={project.title} className="border rounded px-4 py-8">
              <Image
                width={1000}
                height={64}
                src={project.image}
                alt={project.title}
                className="rounded"
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
