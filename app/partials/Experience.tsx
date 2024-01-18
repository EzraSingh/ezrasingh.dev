import { FaLink } from "react-icons/fa";
import { Section, ToolList } from "@/app/components";

export interface ExperienceProps {
  content: Array<{
    org: string;
    role: string;
    department: string;
    location: string;
    timeframe: string;
    website: string;
    description: string;
    tools: string[];
  }>;
}

export const Experience: React.FC<ExperienceProps> = ({ content }) => (
  <Section
    id="experience"
    title="experience"
    cta="view full resume"
    ctaLink="/resume.pdf"
    className="animate__animated animate__fadeIn animate__slower animate__delay-3s"
  >
    <ol>
      {content.map(
        ({
          org,
          role,
          department,
          location,
          timeframe,
          website,
          description,
          tools = [],
        }) => (
          <li className="mb-12" key={org}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {timeframe}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="capitalize font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                      href={website}
                      target="_blank"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span className="capitalize">
                        {role}&nbsp;|&nbsp;{org}
                        <span className="inline-block lg:ml-4 ml-2">
                          <FaLink />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <div className="text-slate-500">{department}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">{location}</div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal normal-case">
                  {description}
                </p>
                <ToolList tools={tools} />
              </div>
            </div>
          </li>
        )
      )}
    </ol>
  </Section>
);
