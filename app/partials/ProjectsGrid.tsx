"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import cx from "classnames";
import { ToolList } from "@/app/components";

export interface ProjectDetails {
  title: string;
  image: string;
  description: string;
  wip: boolean;
  tools: string[];
  links?: {
    app?: string;
    study?: string;
  };
}

export interface ProjectsGridProps {
  projects: ProjectDetails[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const grid = useRef(null);
  const [gridColumnCount, setGridColumnCount] = useState(3);

  useEffect(() => {
    if (grid.current) {
      const gridStyle = window.getComputedStyle(grid.current);
      const columnCount = gridStyle
        .getPropertyValue("grid-template-columns")
        .split(" ").length;
      setGridColumnCount(columnCount);
    }
  }, [grid]);

  return (
    <ul
      ref={grid}
      className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 lg:gap-12 lg:p-8 p-4 gap-4 animate__animated animate__fadeIn"
    >
      {projects.map((project, index) => (
        <li
          key={index}
          className={cx(
            "relative",
            "border",
            "border-slate-600",
            "hover:border-slate-300",
            "rounded-lg",
            "p-10",
            "pb-24",
            "transition",
            "motion-reduce:transition-none",
            "lg:group-hover:bg-slate-800/50",
            "lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]",
            "lg:group-hover:drop-shadow-lg",
            "animate__animated",
            "animate__fadeIn",
            "animate__slow",
            {
              // ? stagger delay by grid column count
              [`animate__delay-${index % gridColumnCount}s`]:
                // ? delay class only applies to index with modulo > 0
                // ? so every other column except the first will have a delay
                index % gridColumnCount,
            }
          )}
        >
          <Image
            width={1000}
            height={64}
            src={project.image}
            alt={project.title}
            className="rounded-xl"
            priority
          />
          <h2 className="my-4 capitalize text-2xl font-medium leading-snug text-slate-200 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            {project.title}
            {project.wip && (
              <span className="rounded-full bg-orange-400/10 ml-4 px-3 py-1 text-xs font-medium leading-5 text-orange-300 ">
                WIP
              </span>
            )}
          </h2>
          <p className="my-2 mb-4 mr-4">{project.description}</p>
          <ToolList tools={project.tools} />
          <div className="absolute flex justify-between left-8 right-8 bottom-8 capitalize">
            {project?.links?.app ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 hover:underline focus-visible:text-teal-300 group/link text-base"
                href={project.links.app}
                target="_blank"
              >
                <span className="flex items-center capitalize">
                  visit project
                  <span className="inline-block lg:ml-4 ml-2">
                    <FiExternalLink />
                  </span>
                </span>
              </a>
            ) : (
              <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base cursor-not-allowed">
                <span className="flex items-center capitalize">
                  not live yet
                </span>
              </span>
            )}
            {project?.links?.study && (
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 hover:underline focus-visible:text-teal-300 group/link text-base"
                href={project.links.study}
              >
                <span className="flex items-center capitalize">
                  view case study
                </span>
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
