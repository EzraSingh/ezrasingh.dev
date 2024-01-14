import cx from "classnames";

const containerClass = cx(
  "mx-auto",
  "min-h-screen",
  "max-w-screen-xl",
  "px-6",
  "py-12",
  "font-sans",
  "md:px-12",
  "md:py-20",
  "lg:px-24",
  "lg:py-0"
);

export interface SplitLayoutProps extends React.PropsWithChildren {
  className?: string;
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  className,
  children,
}) => (
  <div className={cx(containerClass, className)}>
    <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
  </div>
);
