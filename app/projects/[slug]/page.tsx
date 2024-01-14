"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SplitLayout, ToolList } from "@/app/components";
import cx from "classnames";

// @ts-ignore
import content from "@/app/content/projects.yml";

const galleryClass = cx(
  "lg:sticky",
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
  const project = content.projects[params.slug];

  if (!project) {
    router.replace("/");
    return <></>;
  }

  return (
    <>
      <div className="max-w-screen-xl flex gap-8 mx-auto pt-6 px-6 -mb-4 lg:pb-8 md:px-12 lg:px-24">
        <Link href="/projects" className={linkClass}>
          back to projects&nbsp;
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
          <Image
            width={1000}
            height={500}
            src={project.image}
            alt={project.title}
            className="shadow-xl rounded-lg"
          />
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
          <hr className="my-8 w-5/6 opacity-60" />
          <div className="pr-6 lg:pr-12">
            <p className="mt-2 text-sm leading-relaxed normal-case line-h">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              risus ante, fringilla quis velit at, facilisis fringilla sem. Sed
              mauris lacus, facilisis eu scelerisque aliquam, porttitor vel
              arcu. Pellentesque ac eros lorem. Donec convallis tortor ut lacus
              sollicitudin iaculis. Vivamus volutpat dui magna. Vivamus non
              vestibulum justo. Curabitur feugiat elit commodo, varius purus ac,
              luctus lacus. Nunc tincidunt porttitor nunc eget faucibus. Fusce
              finibus turpis ut nisl porta accumsan. Phasellus fermentum rutrum
              elementum. In tempus massa sed mi sagittis, at egestas neque
              tempus.
            </p>
            <p className="mt-2 text-sm leading-relaxed normal-case">
              Vivamus a elit quis mauris venenatis hendrerit. Curabitur ac nibh
              sed nisl feugiat aliquam id eget massa. Mauris fringilla neque
              mauris, eget ultricies tortor porttitor in. Sed posuere leo eget
              pellentesque lobortis. Donec in convallis quam, in dictum tortor.
              Etiam at diam ut libero consequat euismod. Sed a leo nulla. Cras
              orci erat, aliquet eu ullamcorper aliquet, vulputate vitae ex. Ut
              at tristique metus. Pellentesque id ex suscipit, imperdiet turpis
              ut, tempus leo. Duis aliquet erat ut vestibulum semper. Sed
              aliquam accumsan enim sed volutpat. Nulla facilisi. Etiam libero
              odio, congue vitae pharetra lobortis, consectetur eget orci.
            </p>
            <p className="mt-2 text-sm leading-relaxed normal-case">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean fermentum molestie velit sed
              mattis. Nulla venenatis euismod augue quis varius. Etiam at neque
              id leo iaculis varius non non nulla. Nullam at erat hendrerit,
              lacinia sapien id, varius orci. Duis consequat vitae risus et
              dignissim. Duis a bibendum augue. Integer id ex porta, vestibulum
              lorem sed, faucibus neque. Proin ultrices tellus eros, vel mattis
              ligula feugiat eget. Aenean dictum efficitur tristique. In id
              aliquet elit. Sed quam nisi, dignissim sollicitudin tempus a,
              tempus laoreet nunc. Curabitur eu tortor fermentum massa rhoncus
              mattis id nec dui. Proin aliquet porta urna vel vehicula.
              Phasellus at nisl a dolor aliquet tincidunt.
            </p>
            <p className="mt-2 text-sm leading-normal normal-case">
              Donec ut eleifend neque. Suspendisse potenti. Nunc et elit quis
              risus aliquet facilisis eget eu urna. Nunc at aliquet nibh. Fusce
              scelerisque metus sit amet lectus condimentum, nec convallis quam
              finibus. Proin venenatis ipsum eu elit interdum suscipit.
              Vestibulum urna erat, aliquet a tellus vel, ultrices vestibulum
              tortor. Maecenas ut vehicula lectus. Proin mollis, ante fringilla
              tincidunt finibus, tortor neque vulputate purus, ut dignissim
              tellus augue quis odio. Vivamus ut ex felis. Nullam consectetur
              tempor magna non sagittis.
            </p>
            <p className="mt-2 text-sm leading-normal normal-case">
              Vestibulum risus odio, interdum aliquam auctor ut, auctor luctus
              ligula. Fusce blandit posuere sapien et condimentum. In et arcu
              magna. Proin porttitor porta nibh, sit amet auctor sem dictum et.
              Maecenas non lacinia est. In gravida auctor sollicitudin. In in
              orci commodo, viverra enim vel, congue risus. Nulla facilisi.
              Donec facilisis eleifend mauris, non convallis velit imperdiet a.
            </p>
          </div>
        </main>
      </SplitLayout>
    </>
  );
}
