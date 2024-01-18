import { FaLink } from "react-icons/fa";
import { Section, ToolList } from "@/app/components";

export interface ArticleProps {
  content: Array<{
    title: string;
    link: string;
    description: string;
    platform: string;
    published: string;
    tags?: string[];
  }>;
}

export const Articles: React.FC<ArticleProps> = ({ content }) => {
  return (
    <Section
      id="articles"
      title="articles"
      cta="view all articles"
      ctaLink="https://medium.com/@singhezra"
      className="animate__animated animate__fadeIn animate__slower animate__delay-3s"
    >
      <ol>
        {content.map(
          ({ title, link, description, platform, published, tags = [] }) => (
            <li className="mb-12" key={link}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {published}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="capitalize font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                        href={link}
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span className="capitalize">
                          {title}
                          <span className="inline-block lg:ml-4 ml-2">
                            <FaLink />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <div className="text-slate-500 capitalize">
                        {platform}
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal normal-case">
                    {description}
                  </p>
                  <ToolList tools={tags} />
                </div>
              </div>
            </li>
          )
        )}
      </ol>
    </Section>
  );
};
