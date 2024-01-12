import { FiExternalLink } from "react-icons/fi";
import cx from "classnames";

const containerClass = cx(
  "mb-16",
  "scroll-mt-16",
  "md:mb-24",
  "lg:mb-36",
  "lg:scroll-mt-24"
);

const titleClass = cx(
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
  "lg:sr-only",
  "lg:relative",
  "lg:top-auto",
  "lg:mx-auto",
  "lg:w-full",
  "lg:px-0",
  "lg:py-0",
  "lg:opacity-0"
);

export interface SectionProps extends React.PropsWithChildren {
  id: string;
  title: string;
  cta?: string;
  ctaLink?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  cta,
  ctaLink,
  className,
  children,
}) => (
  <section id={id} className={cx(containerClass, className)} aria-label={title}>
    <div className={titleClass}>
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {title}
      </h2>
    </div>
    <div>
      {children}
      {cta && (
        <div className="mt-12 capitalize">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 hover:underline focus-visible:text-teal-300 group/link text-base"
            href={ctaLink}
          >
            <span className="flex items-center">
              {cta}
              <span className="inline-block lg:ml-4 ml-2">
                <FiExternalLink />
              </span>
            </span>
          </a>
        </div>
      )}
    </div>
  </section>
);
