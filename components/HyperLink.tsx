export const HyperLink: React.FC<JSX.IntrinsicElements["a"]> = (props) => (
  <a
    {...props}
    target="_blank"
    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
    rel="noreferrer noopener"
  />
);
